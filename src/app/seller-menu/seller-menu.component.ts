import { element } from 'protractor';
import { Cart } from './../Models/Cart';
import { Address } from './../Models/Address';
import { SellerServiceService } from './../seller-services/seller-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Menu } from './../Models/Menu'

@Component({
  selector: 'app-seller-menu',
  templateUrl: './seller-menu.component.html',
  styleUrls: ['./seller-menu.component.css']
})
export class SellerMenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, private sellerServiceService:SellerServiceService) { }

  menu: Menu[];
  cart: Cart;
  sellerEmail: string;
  ngOnInit(): void {
    this.route.params.subscribe(
      param=> this.sellerEmail = param.email
    )

    this.cart = JSON.parse(sessionStorage.getItem("cart"));
    if(this.cart==null){
      this.cart = new Cart;
      this.cart.sellerEmail = this.sellerEmail;
      this.cart.dishes = [];
    }

    this.sellerServiceService.getSellerMenu(this.sellerEmail).subscribe(
      response=>{
        this.menu=response,this.fun()
      }
    )
  }

  fun(){
    for(let cartDish of this.cart?.dishes){
      let dish = this.menu.find(element=>element.dId==cartDish.dId)
      const index = this.menu.indexOf(dish)
      this.menu[index].quantity = cartDish.quantity
    }
  }

  addItem(adder: number, dish: Menu){
    console.log(dish)
    if(this.cart!=null){
      let d = this.cart?.dishes?.find(element=>element.dId==dish.dId);
      const index = this.cart.dishes.indexOf(d);
      if(this.cart.dishes==null || index==-1){
        dish.quantity=1;
        this.cart.dishes.push(dish);
      }
      else{
        this.cart.dishes[index].quantity+=adder;
        dish.quantity+=adder
        // let d = this.menu.find(element=>element.dId==dish.dId);
        // const indexMenu = this.cart.dishes.indexOf(d);
        // this.menu[indexMenu].quantity = this.cart.dishes[index].quantity
        if(this.cart.dishes[index].quantity==0){
          this.cart.dishes.splice(index,1);
        }
      }
    }
    else{
      this.cart = new Cart;
      this.cart.sellerEmail = this.sellerEmail
      this.cart.dishes = []
      dish.quantity=1
      this.cart.dishes.push(dish);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }

}
