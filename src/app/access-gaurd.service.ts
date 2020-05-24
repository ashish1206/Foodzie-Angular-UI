import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AccessGaurdService implements CanActivate{

  constructor(private route: Router, private cookieService:CookieService) { }

  canActivate(){
    if(this.cookieService.get("jwt")!=null){
      return true
    }
    else{
      this.route.navigate(['/user/login'])
      return false
    }
  }
}
