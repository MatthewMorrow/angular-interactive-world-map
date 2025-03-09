import { Component, ElementRef, Output, EventEmitter, AfterViewInit, Renderer2 } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { WorldbankApiService } from '../../services/worldbank-api.service';

@Component({ // Define the component
  selector: 'app-world', 
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements AfterViewInit {  // Define the WorldComponent class
  @Output() selectedDetails = new EventEmitter<any>();

  private selectedPath: SVGPathElement | null = null;
  private tooltip: HTMLElement;

  constructor( // Define the constructor
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private worldApiService: WorldbankApiService
  ) {
    this.tooltip = this.renderer.createElement('div'); // Create a div element
    this.renderer.addClass(this.tooltip, 'tooltip'); // Add the tooltip class
    this.renderer.setStyle(this.tooltip, 'position', 'absolute'); // Set the position property to absolute
    this.renderer.setStyle(this.tooltip, 'display', 'none'); // Set the display property to none
    this.renderer.appendChild(document.body, this.tooltip); // Append the tooltip to the body
  }

  ngAfterViewInit() { // Define the ngAfterViewInit method
    const svgElement = this.elementRef.nativeElement.querySelector("svg"); // Get the SVG element
    const pathElements = svgElement.querySelectorAll("path"); // Get all path elements
    pathElements.forEach((path: SVGPathElement) => { // Iterate over each path element
      this.renderer.listen(path, "click", (event) => this.handleClick(event)); // Listen for click events
      this.renderer.listen(path, "mousemove", (event) => this.handleMouseMove(event)); // Listen for mousemove events
      this.renderer.listen(path, "mouseleave", () => this.handleMouseLeave()); // Listen for mouseleave events
    });
  }

  handleClick(event: MouseEvent) { // Define the handleClick method
    const path = event.target as SVGPathElement;
    if (this.selectedPath) { // Check if a path is selected
      this.renderer.removeClass(this.selectedPath, 'selected'); // Remove the selected class
    }
    this.renderer.addClass(path, 'selected');
    this.selectedPath = path;

    const countryId = path.id; 
    this.worldApiService.getCountryData(countryId).subscribe((data: any) => { // Get the country data
      const countryDetails = {
        countryId: data[1][0].name,
        capital: data[1][0].capitalCity,
        region: data[1][0].region.value,
        incomeLevel: data[1][0].incomeLevel.value,
        latitude: data[1][0].latitude,
        longitude: data[1][0].longitude
      };

      this.selectedDetails.emit(countryDetails); 
    });
  }

  handleMouseMove(event: MouseEvent) { // Define the handleMouseMove method
    const path = event.target as SVGPathElement;
    const countryName = path.getAttribute('name');
    
    if (countryName) { 
      this.tooltip.innerText = countryName;
      this.renderer.setStyle(this.tooltip, 'display', 'block'); // Set the display property to block
      this.renderer.setStyle(this.tooltip, 'top', `${event.clientY - 50}px`); // Set the top property
      this.renderer.setStyle(this.tooltip, 'left', `${event.clientX}px`); // Set the left property
    }
  }

  handleMouseLeave() { // Define the handleMouseLeave method
    this.renderer.setStyle(this.tooltip, 'display', 'none');
  }
}