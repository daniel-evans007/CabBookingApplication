import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AuthServiceService } from '../auth-service.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer = new Customer();
  
  msg = '';
  constructor(private _service:AuthServiceService, private _router:Router) { }

  email: FormControl = new FormControl;
  password: FormControl = new FormControl;

  loginForm: FormGroup = new FormGroup(
    {
      'email': this.email,
      'password': this.password,
    }
  );

  ngOnInit(): void {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }
  
  loginCustomer(){
    this._service.loginCustomerFromRemote(this.customer).subscribe(
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