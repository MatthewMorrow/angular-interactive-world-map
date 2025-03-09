// Define the appConfig object that will be used to configure the application

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // Import the ApplicationConfig and provideZoneChangeDetection modules
import { provideRouter } from '@angular/router'; // Import the provideRouter module
import { routes } from './app.routes'; // Import the routes

export const appConfig: ApplicationConfig = { // Define the appConfig object
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
