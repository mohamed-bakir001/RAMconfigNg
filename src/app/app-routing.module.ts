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


const routes :Routes  =  [
  {path:""  , component:LoginComponent},
  {path:"home"  , component:HomeComponent,},
  {path:"signup" , component:SignupComponent,},
  {path:"api"  , component:SharedComponent,
    children: [
      { path: 'airplan', component: AirplaneComponent },
      { path: 'system/:id', component: SystemComponent },
      { path: 'swlocation/:id', component: SwlocationComponent },
      {path:'upload', component:UploadComponent},
      {path:"dashboard" , component:DashboardComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
