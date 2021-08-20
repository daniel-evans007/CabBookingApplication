import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-custsignup',
  templateUrl: './custsignup.component.html',
  styleUrls: ['./custsignup.component.css']
})
export class CustsignupComponent implements OnInit {

  customer = new Customer();

  msg = '';
  constructor(private _service: AuthenticationService, private _router: Router) { }

  ngOnInit(): void {
  }

  registerCustomer(){
    this._service.signupCustomerFromRemote(this.customer).subscribe(
      data=> {
        console.log("Registration Successful "+ data);
        this._router.navigate(['customer/login']);
    },
      error=> {
        console.log("exception received "+ error)
        this.msg = error.error;
        ; 
    }
    );
  }

}
