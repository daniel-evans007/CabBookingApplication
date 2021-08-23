import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Driver } from '../driver';

@Component({
  selector: 'app-driversignup',
  templateUrl: './driversignup.component.html',
  styleUrls: ['./driversignup.component.css']
})
export class DriversignupComponent implements OnInit {

  driver = new Driver();
  msg = '';
  constructor(private _service: AuthenticationService, private _router:Router) { }

  ngOnInit(): void {
  }

  registerDriver(){
    this._service.signupDriverFromRemote(this.driver).subscribe(
      data=> {
        console.log("Registration Successful "+ data);
        this._router.navigate(['driver/login']);
    },
      error=> {
        console.log(error);
        this.msg = error.error;
        ; 
    }
    );
  }
}
