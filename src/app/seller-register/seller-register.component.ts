import { UserSignupService } from './../user-signup/user-signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Seller } from './../Models/Seller'
import { SellerServiceService } from '../seller-services/seller-service.service';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent implements OnInit {

  registerForm: FormGroup;
  seller:Seller
  constructor(private formBuilder: FormBuilder, private sellerService: SellerServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',Validators.required],
      phoneNumber: ['', Validators.required],
      name: ['',Validators.required]
    })
  }

  register() {
    this.seller = this.registerForm.value as Seller;
    this.sellerService.register(this.seller).subscribe(
      res=>{
        
      }
    )
  }
}
