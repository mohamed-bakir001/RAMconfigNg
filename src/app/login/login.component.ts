import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from "../core/services/auth.service";
import {TokenStorageService} from "../core/services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide= false ;
  loginForm!: FormGroup  ;
  isLoginFailed:Boolean;
  isLoggedIn ;
  roles : string[] = [];
  errorMsg : string = '';

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
      password:[null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit(){
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get("password").value).subscribe(
      resutl =>{
        console.log(resutl)
        this.tokenStorage.saveToken(resutl.accessToken);
        this.tokenStorage.saveUser(resutl) ;
        this.isLoginFailed = false ;
        this.isLoggedIn = true ;
        this.roles = this.tokenStorage.getUser().roles;
        this.route.navigateByUrl("home");
      }
    )
    //this.route.navigateByUrl('/api/upload');
  }



}
