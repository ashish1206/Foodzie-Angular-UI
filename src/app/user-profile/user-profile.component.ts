import { environment } from './../../environments/environment.prod';
import { UserService } from './../user-services/user.service';
import { User } from './../Models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address } from './../Models/Address';
import { Component, OnInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  tempAddress: Address;
  addressForm: FormGroup;
  addresses: Address[];
  updateForm: FormGroup;
  user: User;
  changePassForm: FormGroup
  constructor(private formBuilder:FormBuilder, private userService:UserService) { }


  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'))
    this.addresses = JSON.parse(sessionStorage.getItem("addresses"));
    this.addressForm = this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['',Validators.required],
      city: ['', Validators.required],
      state: ['',Validators.required]
    })
    this.updateForm = this.formBuilder.group({
      email: [this.user.email, Validators.required],
      password: [,Validators.required],
      phoneNumber: [this.user.phoneNumber, Validators.required],
      username: [this.user.username,Validators.required]
    })
    this.changePassForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['',Validators.required],
      confPassword: ['',Validators.required]
    })
  }

  selectAddress(address: Address){
    this.tempAddress = address;
    this.addressForm.setValue({
      addressLine1: this.tempAddress.addressLine1,
      addressLine2: this.tempAddress.addressLine2,
      city: this.tempAddress.city,
      state: this.tempAddress.state 
    })
  }

  updateAddress(){
    let updatedAdd = this.addressForm.value as Address;
    updatedAdd.addId = this.tempAddress.addId
    this.userService.updateUserAddress(updatedAdd).subscribe(
      res=>{
          const index = this.addresses.indexOf(this.tempAddress);
          if(index!=-1){
            this.addresses[index].addressLine1 = updatedAdd.addressLine1
            this.addresses[index].addressLine2 = updatedAdd.addressLine2
            this.addresses[index].city = updatedAdd.city
            this.addresses[index].state = updatedAdd.state
          }
          sessionStorage.setItem("addresses", JSON.stringify(this.addresses));
          let currAddress : Address = JSON.parse(sessionStorage.getItem("currAddress"));
          console.log(currAddress, this.tempAddress, updatedAdd);
          if(this.tempAddress.addId == currAddress.addId){
            sessionStorage.setItem("currAddress", JSON.stringify(updatedAdd));
          }
      }
    )
  }

  updateUserDetails(){
    let updatedUser = this.updateForm.value as User;
    this.userService.updateUserDetails(updatedUser).subscribe(
      res=>{
        sessionStorage.setItem("user",JSON.stringify(updatedUser));
      }
    )
  }

  changePass(){
    let user = this.changePassForm.value as User;
    user.email = this.user.email
    this.userService.changeUserPass(user).subscribe(
      res=>{

      }
    )
  }

  deleteAddress(address: Address){
    this.userService.deleteUserAddress(address.addId).subscribe(
      res=>{
        const index = this.addresses.indexOf(address)
        if(index!=-1){
          this.addresses.splice(index,1)
        }
        sessionStorage.setItem("addresses", JSON.stringify(this.addresses));
        let currAddress = JSON.parse(sessionStorage.getItem("currAddress"));
          if(this.tempAddress == currAddress){
            currAddress = address;
            sessionStorage.setItem("currAddress", null);
          }
      }
    )
  }

  addAddress(){
    let address = this.addressForm.value as Address
    address.email = this.user.email
    this.userService.addAddress(address).subscribe(
      (res)=>{
        this.addresses.push(address);
        sessionStorage.setItem("addresses", JSON.stringify(this.addresses));
      }
    )
  }

  restAddressForm(){
    this.addressForm.setValue({
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '' 
    })
  }
}
