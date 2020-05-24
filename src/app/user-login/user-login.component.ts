import { Address } from './../Models/Address';
import { Router } from '@angular/router';
import { UserLoginService } from './user-login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../Models/User'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;
  loginForm: FormGroup;
  addresses: Address[];
  constructor(private formBuilder: FormBuilder, private userLoginService: UserLoginService,
    private route: Router, private cookieService : CookieService) { }

  ngOnInit(): void {
    this.user = new User();
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    this.user = this.loginForm.value as User;
    this.userLoginService.login(this.user).subscribe(
      (response) => {
        this.user = response;
        this.cookieService.set('jwt', this.user.jwt);
        this.addresses = this.user.addresses;
        sessionStorage.setItem("user", JSON.stringify(this.user));
        sessionStorage.setItem("addresses", JSON.stringify(this.addresses));
        this.route.navigate(['/user/home']);
      }
    )
  }

}
