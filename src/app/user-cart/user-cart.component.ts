import { UserService } from './../user-services/user.service';
import { Component, OnInit } from '@angular/core';
import { Menu } from './../Models/Menu'

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {

  cartItems: Menu[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    let email = JSON.parse(sessionStorage.getItem('user')).email
    this.userService.getCartItems(email).subscribe(
      res => this.cartItems = res
    )
  }

}
