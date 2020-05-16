import { SellerServiceService } from './../seller-services/seller-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seller } from './../Models/Seller'

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {

  loginForm: FormGroup;
  seller: Seller;
  constructor(private formBuilder:FormBuilder, private sellerServiceService:SellerServiceService,
    private route: Router) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    this.seller = this.loginForm.value as Seller;
    this.sellerServiceService.login(this.seller).subscribe(
      res=>{
        this.seller = res
        sessionStorage.setItem("seller",JSON.stringify(this.seller));
        this.route.navigate(['/seller/home'])
      }
    )
  }

}
