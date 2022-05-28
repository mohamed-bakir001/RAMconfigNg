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

  hide = true ;
  loginForm!: FormGroup  ;
  isLoginFailed:Boolean;
  isLoggedIn ;
  rolesValue : string[] = ["User", "Admin"] ;
  roles : string[] = [];
  errorMsg : string = '';
  user:User ;

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
      firstName:[null,[Validators.required]],
      lastName:[null,[Validators.required]],
      roles:[null, [Validators.required]]
    })
  }

  register(){
    if(this.loginForm.value){
     this.user = this.loginForm.value;
     this.user.roles = Array(this.loginForm.get("roles").value) ;
     console.log(this.user)

      this.authService.register(this.user).subscribe(resutl =>{
        console.log(resutl)
        this.route.navigateByUrl("api/dashboard") ;
      }) ;
    }
    //  this.route.navigateByUrl('/login');
  }

  return() {
    this.route.navigateByUrl("api/user")
  }

}
