import { Seller } from './../Models/Seller';
import { SellerServiceService } from './../seller-services/seller-service.service';
import { Address } from './../Models/Address';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private sellerServiceService:SellerServiceService) { }
  changePassForm: FormGroup
  addressForm: FormGroup
  updateForm: FormGroup
  address: Address
  seller: Seller
  ngOnInit(): void {
    this.seller = JSON.parse(sessionStorage.getItem('seller'))
    this.addressForm = this.formBuilder.group({
      addressLine1: [this.seller.address?.addressLine1, Validators.required],
      addressLine2: [this.seller.address?.addressLine2,Validators.required],
      city: [this.seller.address?.city, Validators.required],
      state: [this.seller.address?.state,Validators.required]
    })
    this.updateForm = this.formBuilder.group({
      email: [this.seller.email, Validators.required],
      password: [,Validators.required],
      phoneNumber: [this.seller.phoneNumber, Validators.required],
      sName: [this.seller.sName,Validators.required]
    })
    this.changePassForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['',Validators.required],
      confPassword: ['',Validators.required]
    })
  }
  updateAddress() {
    this.address = this.addressForm.value as Address;
    this.address.email = JSON.parse(sessionStorage.getItem('seller')).email;
    this.sellerServiceService.addAddress(this.address).subscribe(
      res=>{
        
      }
    )
  }

  updateSellerDetails(){
    let seller: Seller = this.updateForm.value as Seller;
    this.sellerServiceService.updateSellerDetails(seller).subscribe(
      res=>{

      }
    )
  }

  changePass(){
    let seller: Seller = this.changePassForm.value as Seller;
    seller.email = this.seller.email
    this.sellerServiceService.changeSellerPassword(seller).subscribe(
      res=>{

      }
    )
  }
}
