import { SellerServiceService } from './../seller-services/seller-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './../Models/User'
import { Seller } from './../Models/Seller'
import { Menu } from './../Models/Menu'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  user: User;
  sellers: Seller[];
  constructor( private sellerServiceService: SellerServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    this.sellerServiceService.getSellersByCity("bangalore").subscribe(
      (response) => {
        this.sellers = response;
      }
    )
  }

  getSellerMenu(email: string){
    this.route.navigate(['/seller/menu', email], { skipLocationChange: true})
  }

}
