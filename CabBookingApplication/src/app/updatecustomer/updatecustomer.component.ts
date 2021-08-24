import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  public customer: Customer = new Customer();
  public email: string;
  public customerId: number;
  dateNow: string = "";

  constructor(private _cservice: CustomerService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this._cservice.getCustomer(this.email)
    .subscribe(data => {
      this.customer = data;
      this.customerId = this.customer.customerId;
      console.log(this.customer.username);
    },
    error => console.log(error));
  }

  updateCustomer(){
    this._cservice.updateCustomer(this.customerId,this.customer).subscribe(
      data=>{
        this.customer = data;
        console.log(data);
      },
      error => console.log(error));
  }

  goTrips(){
    this._router.navigate(['customer/details/trips',this.customer.email]);
  }

  goBookCab(){
    this._router.navigate(['customer/details',this.customer.email]);
  }

  goUpdate(){
    this._router.navigate(['customer/details/update',this.customer.customerId]);
  }

  public date: Date = new Date();

  showDate() {
    this.dateNow = this.date.getDate()+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
    return this.dateNow;
  }
}
