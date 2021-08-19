import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http'
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _http:HttpClient) { }

  serverUrl: string = "http://localhost:8087/api"

  public loginCustomerFromRemote(customer: Customer):Observable<any>{
    return this._http.post(`${this.serverUrl}/customer/login`, customer);
  }

  public signupCustomerFromRemote(customer: Customer):Observable<any>{
    return this._http.post(`${this.serverUrl}/customer/insertcustomer`, customer);
  }

  public loginAdminFromRemote(admin: Admin):Observable<any>{
    return this._http.post(`${this.serverUrl}/admin/login`, admin);
  }

  public signupAdminFromRemote(admin: Admin):Observable<any>{
    return this._http.post(`${this.serverUrl}/admin/insertadmin`, admin);
  }
}
