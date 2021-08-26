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
  public adminId: number;
  public email: string;

  constructor(private _adminservice: AdminService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this._adminservice.getAdmin(this.email)
                  .subscribe(data => 
                    {
                      this.admin = data;
                      this.adminId = this.admin.adminId; 
                      console.log(this.admin.username);
                    }, 
                    error => console.log(error));
  }


  updateAdmin() {
    this._adminservice.updateAdmin(this.adminId, this.admin).subscribe(
      data=> {
        this.admin = data;
        console.log(data);
      },
      error => console.log(error));
  }

  deleteUsers() {
    this._router.navigate(['admin/details', this.admin.email]);
  }

  allTrips() {
    this._router.navigate(['admin/details/viewalltrips', this.admin.email]);
  }
  
  getAllDrivers() {
    this._router.navigate(['admin/details/viewalldrivers', this.admin.email]);
  }

  tripsCabWise() {

  }

  tripsCustomerWise() {

  }

  tripsDateRange() {

  }

}
