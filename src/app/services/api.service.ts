import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable } from 'rxjs';
import { Weather } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {} 

  getData(city: string, days: number): Observable<Weather>  {
    return this.http.get<Weather>(`${this.apiUrl}&q=${city}&days=${days}`);
  }
}