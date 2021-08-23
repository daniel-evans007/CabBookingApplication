import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminprofdetailsComponent } from './adminprofdetails/adminprofdetails.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { CustomerComponent } from './customer/customer.component';
import { CustprofdetailsComponent } from './custprofdetails/custprofdetails.component';
import { CustsignupComponent } from './custsignup/custsignup.component';
import { TripsComponent } from './trips/trips.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminComponent },
  { path: 'admin/details/:email', component: AdminprofdetailsComponent },
  { path: 'customer/signup', component: CustsignupComponent },
  { path: 'customer/login', component: CustomerComponent },
  { path: 'admin/signup', component: AdminsignupComponent },
  { path: 'customer/details/:email', component: CustprofdetailsComponent },
  { path: 'customer/details/trips/:email', component:TripsComponent },
  { path: 'customer/details/update/:email', component: UpdatecustomerComponent},
  { path: 'admin/details/update/:email', component: UpdateadminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
