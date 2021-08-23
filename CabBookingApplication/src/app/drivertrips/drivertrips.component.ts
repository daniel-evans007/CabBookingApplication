import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-drivertrips',
  templateUrl: './drivertrips.component.html',
  styleUrls: ['./drivertrips.component.css']
})
export class DrivertripsComponent implements OnInit {

  driver: Driver = new Driver();
  public email: string = "";

  constructor(private driverservice: DriverService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this.driverservice.getDriver(this.email)
    .subscribe(data => {
      this.driver = data;
      console.log(this.driver.username);
    },
    error => console.log(error));
  }


  goTrips(){
    this._router.navigate(['driver/details/drivertrips',this.driver.email]);
  }

  goUpdate(){
    this._router.navigate(['driver/updatedetails',this.driver.email]);
  }

  bestDrivers() {
    this._router.navigate(['driver/details/bestdrivers']);
  }

  goDriver() {
    this._router.navigate(['driver/details/viewdriver', this.driver.email]);
  }
}
