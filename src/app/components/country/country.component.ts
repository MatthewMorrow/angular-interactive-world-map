// Code that Define the CountryComponent class which is used to display the country details.

import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country',  // Define the selector
  standalone: true,  // Define the standalone property
  imports: [CommonModule],  // Import the CommonModule
  templateUrl: './country.component.html', // Define the HTML template  
  styleUrls: ['./country.component.css'] // Define the CSS file
})
export class CountryComponent implements OnInit {
  // Define the input properties
  @Input() countryId: string = "";
  @Input() countryCapital: string = "";
  @Input() countryRegion: string = "";
  @Input() countryIncomeLevel: string = "";
  @Input() countryLatitude: number = 0;
  @Input() countryLongitude: number = 0;

  ngOnInit(): void { }
}
