import { Router } from '@angular/router';
import { SellerServiceService } from './../seller-services/seller-service.service';
import { Component, OnInit } from '@angular/core';
import { Order } from './../Models/Order'

@Component({
  selector: 'app-seller-orders',
  templateUrl: './seller-orders.component.html',
  styleUrls: ['./seller-orders.component.css']
})
export class SellerOrdersComponent implements OnInit {

  orders: Order[];
  sellerEmail: string; 
  constructor(private sellerService:SellerServiceService, private route: Router) { }

  ngOnInit(): void {
    this.sellerEmail = JSON.parse(sessionStorage.getItem('seller')).email;
    this.sellerService.getSellersOrder(this.sellerEmail).subscribe(
      res=>{
        this.orders=res
      }
    )
  }

}
