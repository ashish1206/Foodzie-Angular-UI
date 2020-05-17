import { SellerServiceService } from './../seller-services/seller-service.service';
import { Menu } from './../Models/Menu';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-nav',
  templateUrl: './seller-nav.component.html',
  styleUrls: ['./seller-nav.component.css']
})
export class SellerNavComponent implements OnInit {

  addDishForm: FormGroup;
  sellerEmail: string;

  constructor(private formBuilder:FormBuilder, private route: Router, private sellerServiceService: SellerServiceService) { }

  ngOnInit(): void {
    this.sellerEmail =JSON.parse(sessionStorage.getItem('seller')).email;
    this.addDishForm = this.formBuilder.group({
      dishName: ['', Validators.required],
      description: ['',Validators.required],
      price: ['',Validators.required]
    })
  }

  addDish() {
    let dish = this.addDishForm.value as Menu
    dish.email = this.sellerEmail;
    this.sellerServiceService.addDish(dish).subscribe(
      res=>{
        
      }
    )
  }
}
