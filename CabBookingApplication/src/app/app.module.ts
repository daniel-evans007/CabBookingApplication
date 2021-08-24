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
import { DriverComponent } from './driver/driver.component';
import { DriversignupComponent } from './driversignup/driversignup.component';
import { DriverprofdetailsComponent } from './driverprofdetails/driverprofdetails.component';
import { UpdatedriverComponent } from './updatedriver/updatedriver.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DrivertripsComponent } from './drivertrips/drivertrips.component';
import { BestdriversComponent } from './bestdrivers/bestdrivers.component';
import { AdminviewalltripsComponent } from './adminviewalltrips/adminviewalltrips.component';
import { DatePipe } from '@angular/common';
import { OngoingtripComponent } from './ongoingtrip/ongoingtrip.component';

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
    AdminprofdetailsComponent,
    DriverComponent,
    DriversignupComponent,
    DriverprofdetailsComponent,
    UpdatedriverComponent,
    PagenotfoundComponent,
    DrivertripsComponent,
    BestdriversComponent,
    AdminviewalltripsComponent,
    OngoingtripComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
