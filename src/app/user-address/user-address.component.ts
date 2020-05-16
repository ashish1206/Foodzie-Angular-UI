import { Address } from './../Models/Address';
import { UserService } from './../user-services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private userService:UserService) { }

  addressForm: FormGroup
  address: Address
  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      addLine1: ['', Validators.required],
      addLine2: ['',Validators.required],
      city: ['', Validators.required],
      state: ['',Validators.required]
    })
  }

  addAddress() {
    this.address = this.addressForm.value as Address;
    this.address.email = JSON.parse(sessionStorage.getItem('user')).email;
    this.userService.addAddress(this.address)
  }
}
