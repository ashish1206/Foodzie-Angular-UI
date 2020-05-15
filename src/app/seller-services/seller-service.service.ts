import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Seller } from './../Models/Seller'
import { Menu } from './../Models/Menu'
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {

  constructor(private http: HttpClient) { }

  getSellersByCity(city:string): Observable<Seller[]> {
    const url = environment.getSellerByCityAPIUrl
    return this.http.get<Seller[]>(url,{
      params:{
        city:city
      }
    })
  }

  getSellerMenu(email: string) : Observable<Menu[]>{
    const url = environment.getSellerMenuAPIUrl
    return this.http.get<Menu[]>(url, {
      params: {
        email: email
      }
    })
  }
}
