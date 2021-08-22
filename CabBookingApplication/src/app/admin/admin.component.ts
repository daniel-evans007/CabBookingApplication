import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public admin = new Admin();
  public msg: String = "";
  constructor(private _adminservice: AdminService, private _router: Router) { }

  ngOnInit(): void {
  }


  loginUser() {
    this._adminservice.loginUserFromRemote(this.admin).subscribe(
      data=> {
        console.log(data);
        this._router.navigate(['admin',this.admin.email]);
    },
      error=> {
        console.log("exception received "+ error)
        this.msg = 'Email or Password is wrong'; 
    }
    );
  }

  goDetails(){
    this._router.navigate(['admin/details',this.admin.email]);
  }
}
