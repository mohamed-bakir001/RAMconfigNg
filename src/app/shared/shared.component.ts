import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FileService} from "../main/core/services/file-upload.service";
import {AuthService} from "../core/services/auth.service";
import {TokenStorageService} from "../core/services/token-storage.service";
import {User} from "../core/models/user.model";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  user: User = this.tokenService.getUser()
  role = this.user.roles[0]



  constructor(private router:Router,
              private fileServie:FileService,
              private tokenService:TokenStorageService
              ) { }

  ngOnInit(): void {
    console.log(this.user)
  }


  logout() {
    this.tokenService.signOut() ;
    this.router.navigateByUrl('') ;
  }
}
