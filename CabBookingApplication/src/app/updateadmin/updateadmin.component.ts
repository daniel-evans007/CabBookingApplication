import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {

  public admin: Admin = new Admin();
  public email: string = "";
  constructor(private _adminservice: AdminService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this._adminservice.getAdmin(this.email)
                  .subscribe(data => 
                    {
                      this.admin = data; 
                      console.log(this.admin.username);
                    }, 
                    error => console.log(error));
  }

  deleteUsers() {

  }

  updateAdmin() {
    
  }

  allTrips() {

  }

  tripsDateWise() {

  }

  tripsCabWise() {

  }

  tripsCustomerWise() {

  }

  tripsDateRange() {

  }

}
