import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private _baseUrl = 'http://localhost:8087/api/driver';
  
  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(driver: Driver): Observable<any> {
    return this._http.post(`${this._baseUrl}/login/`, driver);
  }

  public getDriver(email: String): Observable<Driver> {
    return this._http.get<Driver>(`${this._baseUrl}/getdriverbyemail/${email}`);
  }

  public updateDriver(driverId:number, driver: Driver):Observable<Driver>{
    return this._http.put<Driver>(`${this._baseUrl}/updatedriver/${driverId}`, driver);
  }
}
