import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _baseUrl = 'http://localhost:8087/api/admin';
  
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
}
