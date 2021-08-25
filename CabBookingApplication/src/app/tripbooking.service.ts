import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TripBooking } from './TripBooking';

@Injectable({
  providedIn: 'root'
})
export class TripbookingService {

  private _baseUrl = 'http://localhost:8087/api/tripbook';
  
  constructor(private _http: HttpClient) { }

  public getTripByTripId(tripBookingId: number): Observable<TripBooking> {
    return this._http.get<TripBooking>(`${this._baseUrl}/gettrip/${tripBookingId}`);
  }
}
