import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import {UploadComponent} from "./main/upload/upload.component";
import {SharedComponent} from "./shared/shared.component";
import {AirplaneComponent} from "./main/airplane/airplane.component";
import {SystemComponent} from "./main/system/system.component";
import {SwlocationComponent} from "./main/swlocation/swlocation.component";
import {UserComponent} from "./user/user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";


const routes :Routes  =  [
  {path:""  , component:LoginComponent},
  {path:"user1" , component:SignupComponent},
  {path:"home"  , component:HomeComponent},
  {path:"api"  , component:SharedComponent,
    children: [
      { path: 'airplan', component: AirplaneComponent },
      { path: 'system/:id', component: SystemComponent },
      { path: 'swlocation/:idair/:idsystem', component: SwlocationComponent },
      {path:'upload', component:UploadComponent},
      {path:"signup" , component:SignupComponent},
      {path:"dashboard" , component:DashboardComponent},
      {path:"user" , component:UserComponent},
      {path:"edituser/:id" , component:EditUserComponent}

    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
