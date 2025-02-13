import { Component } from '@angular/core';
import { Weather } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meteo-angular';
  
  city: string = '';
  weatherData: Weather | null = null;

  onSearch(event: { city: string, weatherData: Weather }) {
    this.city = event.city;
    this.weatherData = event.weatherData;
  }
}
