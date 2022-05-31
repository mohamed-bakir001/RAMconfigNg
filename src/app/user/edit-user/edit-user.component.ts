import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../core/models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../core/services/auth.service";
import {TokenStorageService} from "../../core/services/token-storage.service";
import {DataService} from "../../main/core/services/data.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userid:number
  hide = true ;
  loginForm!: FormGroup  ;
  isLoginFailed:Boolean;
  isLoggedIn ;
  rolesValue : string[] = ["User", "Admin"] ;
  roles : string[] = [];
  errorMsg : string = '';
  user:User ;

  constructor( private route:Router,
               private activatedRoute: ActivatedRoute,
               private dataService:DataService,
               private fb: FormBuilder,
               private authService: AuthService,
               private tokenStorage:TokenStorageService,
               private ngxService:NgxUiLoaderService) { }

  ngOnInit(): void {
   this.userid =  this.activatedRoute.snapshot.params["id"]
    this.createFormGroup();
  }

  createFormGroup(){
    this.dataService.getUser(this.userid).subscribe(user=>{
      this.loginForm = this.fb.group({
        id:[user.id],
        username:[user.username, [Validators.required, Validators.minLength(6)]],
        password:[null, [Validators.required, Validators.minLength(6)]],
        firstName:[user.firstName,[Validators.required]],
        lastName:[user.lastName,[Validators.required]],
        roles:[user.roles[0], [Validators.required]]
      })
    })

  }

  update(){
    this.ngxService.start();
    if(this.loginForm.get('password').value){
      this.user = this.loginForm.value
      this.dataService.deleteUser(this.loginForm.get('id').value).subscribe(
        result=>console.log(result)
      )
      this.user = this.loginForm.value;
      this.user.roles = Array(this.loginForm.get("roles").value) ;

      setTimeout(()=>{
        this.authService.register(this.user).subscribe(
          result=>{
            console.log(result);
            this.ngxService.stop()
          }
        )
      },700)


    }
    this.route.navigateByUrl('api/user');
  }

  return() {
    this.route.navigateByUrl("api/user")
  }

}
