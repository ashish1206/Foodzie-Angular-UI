import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { User } from './../Models/User';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private headers = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  login(user: User): Observable<User>{
    const url = environment.userLoginAPIUrl;
    return this.http.post<User>(url, user, {headers:this.headers});
  }
}
