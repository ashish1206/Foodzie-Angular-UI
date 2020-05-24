import { Address } from './../Models/Address';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Seller } from './../Models/Seller'
import { Order } from './../Models/Order'
import { Menu } from './../Models/Menu'
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
 
@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  private jwt = this.cookieService.get('jwt');
  private headers = new HttpHeaders()
  .set('Content-Type','application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:8080')
  .set("Authorization", "Bearer "+this.jwt)

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  login(seller: Seller): Observable<Seller>{
    const url = environment.sellerLoginAPIUrl
    return this.http.post<Seller>(url, seller, {headers:this.headers})
  }

  register(seller: Seller): Observable<string>{
    const url = environment.sellerRegisterAPIUrl
    return this.http.post<string>(url, seller, {headers:this.headers})
  }

  getSellersByCity(city:string): Observable<Seller[]> {
    const url = environment.getSellerByCityAPIUrl
    return this.http.get<Seller[]>(url, {
      headers:this.headers,
      params:{
        city:city
      }
    })
  }

  getSellerMenu(email: string) : Observable<Menu[]>{
    const url = environment.getSellerMenuAPIUrl
    return this.http.get<Menu[]>(url, {
      headers:this.headers,
      params: {
        email: email
      }
    })
  }

  addDish(dish: Menu): Observable<string>{
    const url = environment.addDishAPIUrl
    return this.http.put<string>(url,dish, {headers:this.headers})
  }

  addAddress(address: Address): Observable<string>{
    const url = environment.addAddressAPIUrl;
    return this.http.put<string>(url, address, {headers:this.headers})
  }

  getSellersOrder(sellerEmail: string):Observable<Order[]> {
    const url = environment.getSellerOrderAPIUrl;
    return this.http.get<Order[]>(url, {
      headers: this.headers,
      params:{
        sellerEmail: sellerEmail
      }
    })
  }

  updateSellerDetails(seller:Seller): Observable<string>{
    const url = environment.sellerUpdateDetailsAPIUrl;
    return this.http.put(url,seller,{
      headers: this.headers,
      responseType:'text'
    })
  }

  changeSellerPassword(seller: Seller): Observable<string>{
    const url = environment.sellerChangePassAPIUrl;
    return this.http.put(url,seller,{
      headers: this.headers,
      responseType:'text'
    })
  }
}
