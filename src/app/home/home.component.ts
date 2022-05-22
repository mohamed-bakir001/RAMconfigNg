import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../core/services/token-storage.service";
import {User} from "../core/models/user.model";
import {Router} from "@angular/router";


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User= this.tokenService.getUser();
  role = this.user.roles[0]
  constructor(private tokenService: TokenStorageService,
              private route: Router) { }

  ngOnInit(): void {
    switch (this.role){
      case "ADMIN":
        this.route.navigateByUrl('api/upload');
        break;
      default :
        this.route.navigateByUrl('api/airplan')
    }
  }

}
