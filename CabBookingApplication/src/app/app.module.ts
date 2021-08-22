import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { CustsignupComponent } from './custsignup/custsignup.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { CustprofdetailsComponent } from './custprofdetails/custprofdetails.component';
import { TripsComponent } from './trips/trips.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { AdminprofdetailsComponent } from './adminprofdetails/adminprofdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    CustsignupComponent,
    AdminsignupComponent,
    CustprofdetailsComponent,
    TripsComponent,
    UpdatecustomerComponent,
    UpdateadminComponent,
    AdminprofdetailsComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
