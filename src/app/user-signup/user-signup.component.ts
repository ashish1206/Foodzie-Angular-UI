import { Router } from '@angular/router';
import { UserSignupService } from './user-signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './../Models/User'

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  signupForm: FormGroup;
  user: User;
  constructor(private formBuilder: FormBuilder, private userSignupService:UserSignupService,
    private route: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['',Validators.required],
      phoneNumber: ['', Validators.required],
      username: ['',Validators.required]
    })
  }

  signup(){
    let res:string;
    this.user = this.signupForm.value as User
    this.userSignupService.signup(this.user).subscribe(
      (response)=>{
        res=response;
        console.log(response)
        window.alert(response)
        this.route.navigate(['/user/login'])
      }
    )
  }
}
