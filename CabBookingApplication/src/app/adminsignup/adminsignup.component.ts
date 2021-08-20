import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})

export class AdminsignupComponent implements OnInit {

  admin = new Admin();
  msg ='';

  constructor(private _service: AuthenticationService, private _router:Router) { }

  ngOnInit(): void {
  }

  registerAdmin(){
    this._service.signupAdminFromRemote(this.admin).subscribe(
      data=> {
        console.log("Registration Successful "+ data);
        this._router.navigate(['admin/login']);
    },
      error=> {
        console.log("exception received "+ error)
        this.msg = error.error;
        ; 
    }
    );
  }

}
