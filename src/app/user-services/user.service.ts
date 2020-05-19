import { User } from './../Models/User';
import { Order } from './../Models/Order';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from './../Models/Address'
import { Menu } from './../Models/Menu'
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  addAddress(address: Address): Observable<string>{
    const url = environment.userAddAddressAPIUrl;
    return this.http.post(url, address, {headers:this.headers, responseType:'text'});
  }

  getCartItems(email:string): Observable<Menu[]>{
    const url = environment.getCartItemAPIUrl
    return this.http.get<Menu[]>(url, {
      params:{
        email: email
      }
    })
  }

  getUserOrders(userEmail:string): Observable<Order[]> {
    const url = environment.getUserOrderAPIUrl;
    return this.http.get<Order[]>(url, {
      params: {
        userEmail: userEmail
      }
    })
  }

  updateUserAddress(address:Address): Observable<string>{
    const url = environment.updateUserAddressAPIUrl;
    return this.http.put(url, address, {responseType:'text'});
  }

  changeUserPass(user: User): Observable<string>{
    const url = environment.changeUserPassAPIUrl;
    return this.http.put<string>(url, user, {headers:this.headers});
  }

  deleteUserAddress(addId):Observable<string>{
    const url = environment.deleteAddPassAPIUrl;
    return this.http.delete<string>(url, {
      params:{
        addId: addId
      }
    })
  }

  updateUserDetails(user: User):Observable<string>{
    const url = environment.updateUserDetailsAPIUrl;
    return this.http.put(url, user, {responseType:'text'});
  }

}
