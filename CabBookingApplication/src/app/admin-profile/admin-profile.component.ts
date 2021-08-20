import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  closeResult: string = "";
  dateNow: string = "";
  
  constructor(private _adservice: AdminService, private _route: ActivatedRoute) { }

  public admin: Admin = new Admin();
  public email: string = "";

  ngOnInit(): void {
    this.email = this._route.snapshot.params['email'];
    this._adservice.getAdmin(this.email)
    .subscribe(data => {
      this.admin = data;
      console.log(this.admin.username)
    },
    error => console.log(error));
  }

  public date: Date = new Date();

  showDate() {
    this.dateNow = this.date.getDate()+"-"+(this.date.getMonth()+1)+"-"+this.date.getFullYear();
    return this.dateNow;
  }
}
