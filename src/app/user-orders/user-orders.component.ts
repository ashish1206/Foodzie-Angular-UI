import { UserService } from './../user-services/user.service';
import { Order } from './../Models/Order';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {

  orders: Order[];
  userEmail: string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userEmail = JSON.parse(sessionStorage.getItem('user')).email;
    this.userService.getUserOrders(this.userEmail).subscribe(
      res=>this.orders=res
    )
  }

}
