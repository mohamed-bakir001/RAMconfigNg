import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide= false ;
  loginForm!: FormGroup  ;

  constructor( private route:Router, private fb: FormBuilder) { }

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
    this.route.navigateByUrl('/api/upload');
  }



}
