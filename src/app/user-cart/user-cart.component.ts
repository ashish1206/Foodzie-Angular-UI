import { Address } from './../Models/Address';
import { Cart } from './../Models/Cart';
import { UserService } from './../user-services/user.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from './../Models/Menu'

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  cart: Cart;
  cartItems: Menu[];
  currAddress: Address;
  totalPrice: number=0;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.cart = JSON.parse(sessionStorage.getItem("cart"));
    this.cartItems = this.cart.dishes;
    this.currAddress = JSON.parse(sessionStorage.getItem("currAddress"));
    for(let item of this.cart.dishes){
      this.totalPrice+=item.quantity*item.price;
    }
  }

  addItem(adder: number, dish: Menu){
    if(this.cart!=null){
      const index = this.cart?.dishes?.indexOf(dish);
      if(this.cart.dishes==null || index==-1){
        dish.quantity=1;
        this.cart.dishes.push(dish);
        this.totalPrice+=dish.price;
      }
      else{
        this.cart.dishes[index].quantity+=adder;
        this.totalPrice+=(dish.price*adder);
        if(this.cart.dishes[index].quantity==0){
          this.cart.dishes.splice(index,1);
        }
      }
    }
    else{
      this.cart.dishes.push(dish);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
