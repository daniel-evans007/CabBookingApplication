import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Customer } from '../customer';
import { Driver } from '../driver';

@Component({
  selector: 'app-adminviewcustomers',
  templateUrl: './adminviewcustomers.component.html',
  styleUrls: ['./adminviewcustomers.component.css']
})
export class AdminviewcustomersComponent implements OnInit {

  constructor(private _adservice: AdminService, private _route: ActivatedRoute, private _router: Router) { }

  public admin: Admin = new Admin();
  public customerList: Customer[];
  public email: string = "";

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];

    this._adservice.getAllCustomers().subscribe(
      data => {
        console.log(data);
        this.customerList = data;
      }
    )
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
