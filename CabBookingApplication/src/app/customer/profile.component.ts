import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../customer';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  closeResult : string = "";
  dateNow: string = "";

  constructor(private _cservice : CustomerService, 
    private _route: ActivatedRoute) { }  
  
  public customer : Customer = new Customer();

  public email:string = "";

  ngOnInit() {
    this.email = this._route.snapshot.params['email'];
    this._cservice.getCustomer(this.email)
                  .subscribe(data => {this.customer = data; console.log(this.customer.username)}, error => console.log(error));
    
  }
  
  public date: Date = new Date();

  showDate() {
    this.dateNow = this.date.getDate()+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
    return this.dateNow;
  }
}

