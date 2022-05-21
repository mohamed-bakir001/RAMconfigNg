import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../core/services/auth.service";
import {TokenStorageService} from "../core/services/token-storage.service";
import {User} from "../core/models/user.model";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide= false ;
  loginForm!: FormGroup  ;
  isLoginFailed:Boolean;
  isLoggedIn ;
  roles : string[] = [];
  errorMsg : string = '';
  user:User;

  constructor( private route:Router,
               private fb: FormBuilder,
               private authService: AuthService,
               private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup(){
    this.loginForm = this.fb.group({

      username:[null, [Validators.required, Validators.minLength(6)]],
      password:[null, [Validators.required, Validators.minLength(6)]],
      firstName:[null,[Validators.required, Validators.minLength(6)]],
      lastName:[null,[Validators.required, Validators.minLength(6)] ],
      roles:[null]
    })
  }

  register(){
    this.user = this.loginForm.value;
    console.log(this.user)
    this.authService.register(this.user).subscribe(
      resutl =>{
        console.log(resutl)
      }
    )
    this.route.navigateByUrl('/login');
  }
}
