import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  city: string = '';
  days: number = 3; 
  weatherData: Weather | null = null;

  @Output() searchEvent = new EventEmitter<{ city: string, weatherData: Weather }>();

  constructor(private apiService: ApiService) {}

  search() {
    this.apiService.getData(this.city, this.days).subscribe(data => {
      this.weatherData = data;
      this.searchEvent.emit({ city: this.city, weatherData: this.weatherData });
    });
  }
}