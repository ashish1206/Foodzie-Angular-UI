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
    this.sellerServiceService.getSellerMenu(this.sellerEmail).subscribe(
      response=>this.menu=response
    )
    this.cart = new Cart();

    this.cart.sellerEmail = this.sellerEmail
    this.cart.sellerName = ""
    this.cart.dishes = []
  }

  addItem(adder: number, dish: Menu){
    if(this.cart!=null){
      const index = this.cart?.dishes?.indexOf(dish);
      if(this.cart.dishes==null || index==-1){
        dish.quantity=1;
        this.cart.dishes.push(dish);
      }
      else{
        this.cart.dishes[index].quantity+=adder;
        if(this.cart.dishes[index].quantity==0){
          this.cart.dishes.splice(index,1);
        }
      }
    }
    else{
      this.cart.sellerEmail = this.sellerEmail;
      this.cart.dishes.push(dish);
    }
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }

}
