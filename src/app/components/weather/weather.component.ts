import { Component, Input } from '@angular/core';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  @Input() weatherData: Weather | null = null;
}