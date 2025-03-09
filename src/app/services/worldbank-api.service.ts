import { Injectable } from '@angular/core'; // Import the Injectable module
import { HttpClient } from '@angular/common/http'; // Import the HttpClient module
import { Observable } from 'rxjs'; // Import the Observable module

@Injectable({ // Define the Injectable module
  providedIn: 'root',
})
export class WorldbankApiService { // Define the WorldbankApiService class
  constructor(private http: HttpClient) {}

  getCountryData(countryId: string): Observable<any> { // Define the getCountryData method
    const url = `https://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get<any>(url);
  }
}
