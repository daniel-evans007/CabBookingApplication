import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';
import { Customer } from './customer';
import { Driver } from './driver';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _baseUrl = 'http://localhost:8087/api/admin';
  private _baseUrlCust = 'http://localhost:8087/api/customer';
  private _baseUrlDriv = 'http://localhost:8087/api/driver';
  
  constructor(private _http: HttpClient) { }

  public loginUserFromRemote(admin: Admin): Observable<any> {
    return this._http.post(`${this._baseUrl}/login/`, admin);
  }

  public getAdmin(email: String): Observable<Admin> {
    return this._http.get<Admin>(`${this._baseUrl}/getadminbyemail/${email}`);
  }

  public updateAdmin(adminId:number, admin: Admin):Observable<Admin>{
    return this._http.put<Admin>(`${this._baseUrl}/updateadmin/${adminId}`, admin);
  }

  public removeCustomer(customerId: number): Observable<any> {
    return this._http.delete(`${this._baseUrlCust}/deletecustomer/${customerId}`, {responseType: 'text'});
  }

  public removeDriver(driverId: number): Observable<any> {
    return this._http.delete(`${this._baseUrlDriv}/deletedriver/${driverId}`, {responseType: 'text'});
  }

  public getAllDrivers(): Observable<Driver[]> {
    return this._http.get<Driver[]>(`${this._baseUrlDriv}/getalldrivers`);
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this._http.get<Customer[]>(`${this._baseUrlCust}/getallcustomers`);
  }
  
}
