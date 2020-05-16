import { SellerServiceService } from './../seller-services/seller-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './../Models/User'
import { Seller } from './../Models/Seller'
import { Address } from './../Models/Address'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User;
  sellers: Seller[];
  addresses: Address[];
  currAddress: Address;
  tempCurrAddress: Address;
  constructor( private sellerServiceService: SellerServiceService,
    private route: Router) { }

  ngOnInit(): void {
    // this.address = sessionStorage.getItem('user').address
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.currAddress = JSON.parse(sessionStorage.getItem("currAddress"));
    this.addresses = this.user.addresses
    console.log(this.addresses)
    this.sellerServiceService.getSellersByCity("bangalore").subscribe(
      (response) => {
        this.sellers = response;
      }
    )
  }

  getSellerMenu(email: string){
    this.route.navigate(['/seller/menu', email], { skipLocationChange: true})
  }

  updateCurrAddress(){
    this.currAddress = this.tempCurrAddress;
    sessionStorage.setItem("currAddress",JSON.stringify(this.currAddress));
    console.log(sessionStorage.getItem("currAddress"));
  }

  updateTempCurrAdd(address: Address){
    this.tempCurrAddress = address;
  }
}
