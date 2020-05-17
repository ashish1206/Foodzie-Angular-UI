import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGaurdService implements CanActivate{

  constructor(private route: Router) { }

  canActivate(){
    if(sessionStorage.getItem('user')!=null || sessionStorage.getItem('seller')!=null){
      return true
    }
    else{
      this.route.navigate(['/user/login'])
      return false
    }
  }
}
