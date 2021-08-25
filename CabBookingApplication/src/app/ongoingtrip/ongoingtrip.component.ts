import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { TripbookingService } from '../tripbooking.service';
import { TripBooking } from '../TripBooking';

@Component({
  selector: 'app-ongoingtrip',
  templateUrl: './ongoingtrip.component.html',
  styleUrls: ['./ongoingtrip.component.css']
})
export class OngoingtripComponent implements OnInit {

  public customer: Customer = new Customer();
  public trip: TripBooking = new TripBooking();
  public triptripBookingId: number;
  public email: string;

  constructor(private _cservice: CustomerService, private _route: ActivatedRoute, private _router: Router,
    private _tripservice: TripbookingService) { }

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this._cservice.getCustomer(this.email)
    .subscribe(data => {
      this.customer = data;
      console.log(this.customer.username);
    },
    error => console.log(error));
    
    this.triptripBookingId = this._route.snapshot.params['tripBookingId'];
    this._tripservice.getTripByTripId(this.triptripBookingId)
    .subscribe(data => {
      this.trip = data;
      console.log(this.trip);
      console.log(this.trip.status);
    })
  }

  onGoingTrip() {
    this._router.navigate(['customer/details/ongoingtrip', this.customer.email]);
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



}
