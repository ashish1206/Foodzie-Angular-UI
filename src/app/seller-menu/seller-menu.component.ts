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

  menu: Menu[]
  email: string
  ngOnInit(): void {
    this.route.params.subscribe(
      param=> this.email = param.email
    )
    this.sellerServiceService.getSellerMenu(this.email).subscribe(
      response=>this.menu=response
    )
  }

}
