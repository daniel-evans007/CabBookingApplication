import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Tripdetails } from '../tripdetails';

@Component({
  selector: 'app-custprofdetails',
  templateUrl: './custprofdetails.component.html',
  styleUrls: ['./custprofdetails.component.css']
})
export class CustprofdetailsComponent implements OnInit {

  public customer: Customer = new Customer();
  public trip: Tripdetails = new Tripdetails();
  public email: string;
  dateNow: string;

  constructor(private _cservice: CustomerService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this._cservice.getCustomer(this.email)
    .subscribe(data => {
      this.customer = data;
      console.log(this.customer.username);
    },
    error => console.log(error));
  }

  bookTrip() {
    this._cservice.bookATrip(this.trip).subscribe(data => {
      this.trip = data;
      console.log(this.trip);
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
    this._router.navigate(['customer/details/update',this.customer.email]);
  }

  public date: Date = new Date();

  showDate() {
    this.dateNow = this.date.getHours()+":"+this.date.getMinutes()+":"+this.date.getSeconds()+" "+this.date.getDate()+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
    return this.dateNow;
  }
}