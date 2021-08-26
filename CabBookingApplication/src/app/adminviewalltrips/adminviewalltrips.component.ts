import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminviewalltrips',
  templateUrl: './adminviewalltrips.component.html',
  styleUrls: ['./adminviewalltrips.component.css']
})
export class AdminviewalltripsComponent implements OnInit {

  constructor(private _adservice: AdminService, private _route: ActivatedRoute, private _router: Router) { }

  public admin: Admin = new Admin();
  
  public email: string = "";

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this._adservice.getAdmin(this.email)
    .subscribe(data => {
      this.admin = data;
      console.log(this.admin.username)
    },
    error => console.log(error));
  }

  deleteUsers() {
    this._router.navigate(['admin/details', this.admin.email]);
  }

  updateAdmin() {
    this._router.navigate(['admin/details/update', this.admin.email]);
  }

  allTrips() {
    this._router.navigate(['admin/details/viewalltrips', this.admin.email]);
  }

  getAllDrivers() {
    this._router.navigate(['admin/details/viewalldrivers', this.admin.email]);
  }

  getAllCustomers() {
    this._router.navigate(['admin/details/viewallcustomers', this.admin.email]);
  }

  tripsCustomerWise() {

  }

  tripsDateRange() {

  }
}
