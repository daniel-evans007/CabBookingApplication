import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  public driver = new Driver();
  public msg: string = "";
  constructor(private _driverservice: DriverService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._driverservice.loginUserFromRemote(this.driver).subscribe(
      data=> {
        console.log(data);
        this._router.navigate(['driver/details',this.driver.email]);
    },
      error=> {
        console.log("exception received "+ error)
        this.msg = 'Email or Password is wrong'; 
    }
    );
  }

  goDetails(){
    this._router.navigate(['driver/details',this.driver.email]);
  }

}
