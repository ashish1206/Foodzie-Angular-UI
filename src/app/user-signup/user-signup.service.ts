import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../Models/User'
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSignupService {

  private headers = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient) { }

  signup(user: User): Observable<string>{
    const url = environment.userSignupAPIUrl;
    return this.http.post<string>(url, user, {headers:this.headers});
  }
}
