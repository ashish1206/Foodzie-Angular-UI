import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerMenuComponent } from './seller-menu/seller-menu.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerNavComponent } from './seller-nav/seller-nav.component';
import { SellerOrdersComponent } from './seller-orders/seller-orders.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserHomeComponent,
    SellerMenuComponent,
    UserSignupComponent,
    UserAddressComponent,
    SellerLoginComponent,
    SellerRegisterComponent,
    UserCartComponent,
    SellerHomeComponent,
    SellerProfileComponent,
    SellerNavComponent,
    SellerOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
