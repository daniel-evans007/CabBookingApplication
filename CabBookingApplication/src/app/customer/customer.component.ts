import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // public customerEmail = '';
  // public customerPassword = '';
  public customer = new Customer();
  public msg:String ="";
  
  constructor(private _customerservice : CustomerService, private _router : Router) { }

  ngOnInit(): void {
  }

  // loginForm = new FormGroup({
  //   customerEmail: new FormControl(''),
  //   customerPassword: new FormControl(''),
  // });

  loginUser() {
    // this.customerEmail = this.loginForm.controls.email.value;
    // this.customerPassword = this.loginForm.controls.password.value;

    this._customerservice.loginUserFromRemote(this.customer).subscribe(
      data=> {
        console.log(data);
        this._router.navigate(['customer/details',this.customer.email]);
    },
      error=> {
        console.log("exception received "+ error)
        this.msg = 'Email or Password is wrong'; 
    }
    );
  }

  goSignup() {
    this._router.navigate(['customer/signup']);
  }

}

