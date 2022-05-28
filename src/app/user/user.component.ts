import { Component, OnInit } from '@angular/core';
import {DataService} from "../main/core/services/data.service";
import {Router} from "@angular/router";
import {NgxUiLoaderService} from "ngx-ui-loader";
import {User} from "../core/models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  columnsToDisplay = [ "First name", "Last name", "Username", "Roles", "Actions"];
  firstUpload:boolean=true;
  users: any ;
  constructor(private dataSerive: DataService,
              private router:Router,
              private ngxuiService:NgxUiLoaderService) {
  }
  ngAfterViewInit() {

  }



  ngOnInit(): void {
    this.ngxuiService.stop()
    this.onGetUsers();


  }

  onGetUsers(){
    this.ngxuiService.start()
    this.dataSerive.getUsers().subscribe(users=>{
      this.users = users ;
      console.log(this.users)
      this.ngxuiService.stop();
    })

  }

  update(user:User) {
    this.router.navigateByUrl('/api/edituser/'+user.id);
  }

  addUser() {
    this.router.navigateByUrl('api/signup');
  }

  deleteUser(id) {
    this.ngxuiService.start()
    this.dataSerive.deleteUser(id).subscribe(()=>{
      setTimeout(()=>{
        this.onGetUsers()
        this.ngxuiService.stop()
      },500)

    })

  }
}
