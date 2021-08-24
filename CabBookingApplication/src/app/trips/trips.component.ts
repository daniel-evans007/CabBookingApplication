import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  constructor(private _cservice : CustomerService, 
    private _route: ActivatedRoute,private _router : Router) { }  
  
  public customer : Customer = new Customer();

  public email:string = "";

  ngOnInit() {
    this.email = this._route.snapshot.params['email'];
    this._cservice.getCustomer(this.email)
                  .subscribe(data => 
                    {
                      this.customer = data; 
                      console.log(this.customer.username);
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

  onGoingTrip() {
    this._router.navigate(['customer/details/ongoingtrip', this.customer.email]);
  }
}
