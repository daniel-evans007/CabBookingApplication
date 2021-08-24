import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { Tripdetails } from './tripdetails';
@Injectable({
  providedIn: 'root'
})
export class CustomerService { 
  private _baseUrl = 'http://localhost:8087/api/customer'; 
  private _tripUrl = 'http://localhost:8087/api/tripbook';

  private tripdetails: Tripdetails;

  constructor(private _http:HttpClient) { }
  
  public loginUserFromRemote(customer: Customer):Observable<any>{
    return this._http.post(`${this._baseUrl}/login`,customer);
  }
  
  public getCustomer(email : String):Observable<Customer>{
    return this._http.get<Customer>(`${this._baseUrl}/getcustomerbyemail/${email}`);
  }

  public updateCustomer(customerId:number, customer: Customer):Observable<Customer>{
    return this._http.put<Customer>(`${this._baseUrl}/updatecustomer/${customerId}`, customer);
  }

  public bookATrip(trip: Tripdetails): Observable<Tripdetails> {
    return this._http.post<Tripdetails> (`${this._tripUrl}/inserttrip`, trip);
  }
}
