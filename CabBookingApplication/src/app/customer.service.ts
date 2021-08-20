import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Customer } from './customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService { 
  private _baseUrl = 'http://localhost:8087/api/customer'; 
  constructor(private _http:HttpClient) { }
  
  public loginUserFromRemote(customer: Customer):Observable<any>{
    return this._http.post("http://localhost:8087/api/customer/login",customer);
  }
  public getCustomer(email : String):Observable<Customer>{
    return this._http.get<Customer>(`${this._baseUrl}/getcustomerbyemail/${email}`);
  }
}
