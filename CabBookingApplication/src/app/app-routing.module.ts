import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminComponent } from './admin/admin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { CustomerComponent } from './customer/customer.component';
import { ProfileComponent } from './customer/profile.component';
import { CustsignupComponent } from './custsignup/custsignup.component';

const routes: Routes = [
  { path: 'admin/login', component: AdminComponent },
  { path: 'customer/login', component: CustomerComponent },
  { path: 'home/:email', component: ProfileComponent },
  { path: 'customer/signup', component: CustsignupComponent },
  { path: 'admin/signup', component: AdminsignupComponent },
  { path: 'admin/:email', component: AdminProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
