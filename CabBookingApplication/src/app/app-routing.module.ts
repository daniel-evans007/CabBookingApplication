import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminprofdetailsComponent } from './adminprofdetails/adminprofdetails.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { BestdriversComponent } from './bestdrivers/bestdrivers.component';
import { CustomerComponent } from './customer/customer.component';
import { CustprofdetailsComponent } from './custprofdetails/custprofdetails.component';
import { CustsignupComponent } from './custsignup/custsignup.component';
import { DriverComponent } from './driver/driver.component';
import { DriverprofdetailsComponent } from './driverprofdetails/driverprofdetails.component';
import { DriversignupComponent } from './driversignup/driversignup.component';
import { DrivertripsComponent } from './drivertrips/drivertrips.component';
import { TripsComponent } from './trips/trips.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { UpdatedriverComponent } from './updatedriver/updatedriver.component';

const routes: Routes = [
  { path: 'driver/signup', component: DriversignupComponent},
  { path: 'driver/login', component: DriverComponent},
  { path: 'driver/details/:email', component: DriverprofdetailsComponent},
  { path: 'driver/details/update/:email', component: UpdatedriverComponent},
  { path: 'driver/details/bestdrivers', component: BestdriversComponent},
  { path: 'driver/details/drivertrips/:email', component: DrivertripsComponent},
  { path: 'driver/details/viewdriver/:email', component: DriverprofdetailsComponent},

  { path: 'admin/signup', component: AdminsignupComponent },
  { path: 'admin/login', component: AdminComponent },
  { path: 'admin/details/:email', component: AdminprofdetailsComponent },
  { path: 'admin/details/update/:email', component: UpdateadminComponent},

  { path: 'customer/signup', component: CustsignupComponent },
  { path: 'customer/login', component: CustomerComponent },  
  { path: 'customer/details/:email', component: CustprofdetailsComponent },
  { path: 'customer/details/trips/:email', component:TripsComponent },
  { path: 'customer/details/update/:email', component: UpdatecustomerComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
