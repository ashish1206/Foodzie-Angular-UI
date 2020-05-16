import { UserCartComponent } from './user-cart/user-cart.component';
import { AccessGaurdService } from './access-gaurd.service';
import { SellerMenuComponent } from './seller-menu/seller-menu.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: 'user/login', component: UserLoginComponent},
  { path: 'user/home', component: UserHomeComponent, canActivate: [AccessGaurdService] },
  { path: 'seller/menu', component: SellerMenuComponent, canActivate: [AccessGaurdService]},
  { path: 'user/signup', component:UserSignupComponent, canActivate: [AccessGaurdService]},
  { path: 'user/cart', component:UserCartComponent, canActivate:[AccessGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
