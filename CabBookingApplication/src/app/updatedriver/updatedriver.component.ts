import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-updatedriver',
  templateUrl: './updatedriver.component.html',
  styleUrls: ['./updatedriver.component.css']
})
export class UpdatedriverComponent implements OnInit {

  public driver: Driver = new Driver();
  public email: string = "";

  constructor(private _driverservice: DriverService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this._driverservice.getDriver(this.email)
                  .subscribe(data => 
                    {
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
    this._router.navigate(['driver/details', this.driver.email]);
  }

  updateDriver() {
    
  }

}
