import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AuthServiceService } from '../auth-service.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  customer = new Customer();
  
  msg = '';
  constructor(private _service:AuthServiceService, private _router:Router) { }

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
