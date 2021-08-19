import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admin = new Admin();
  
  msg = '';
  constructor(private _service:AuthServiceService, private _router:Router) { }

  ngOnInit(): void {
  }


  loginAdmin(){
    this._service.loginAdminFromRemote(this.admin).subscribe(
      data=> {
        console.log("Response Received "+ data);
        this._router.navigate(['']);
    },
      error=> {
        console.log("exception received "+ error)
        this.msg = 'Email or Password is wrong'; 
    }
    );
  }
}
