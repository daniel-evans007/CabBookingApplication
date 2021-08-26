import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Customer } from '../customer';
import { Driver } from '../driver';

@Component({
  selector: 'app-adminprofdetails',
  templateUrl: './adminprofdetails.component.html',
  styleUrls: ['./adminprofdetails.component.css']
})
export class AdminprofdetailsComponent implements OnInit {
  
  constructor(private _adservice: AdminService, private _route: ActivatedRoute, private _router: Router) { }

  public admin: Admin = new Admin();
  public customer: Customer = new Customer();
  public driver: Driver = new Driver();
  
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

  }

  deleteCustomer(customerId: number) {
    console.log(this.customer.customerId);
    this._adservice.removeCustomer(customerId).subscribe(
      data => {
        console.log('deleted response', data);
      }
    )
  }

  deleteDriver(driverId: number) {
    console.log(this.driver.driverId)
    this._adservice.removeDriver(driverId).subscribe(
      data => {
        console.log('deleted response', data);
      }
    );
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
