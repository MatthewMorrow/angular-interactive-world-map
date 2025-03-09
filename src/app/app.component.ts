import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WorldComponent } from './components/world/world.component';
import { CountryComponent } from './components/country/country.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, WorldComponent, CountryComponent], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] 
})
export class AppComponent { 
  title = 'interactive-world-map'; 

  selectedProperties = { // Holds the properties of the selected country
    countryId: "",
    capital: "",
    region: "",
    incomeLevel: "",
    latitude: 0,
    longitude: 0
  };

  updateSelectedProperties(properties: any) { // Updates selectedProperties with new values
    this.selectedProperties = properties;
  }
}