import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { AirplaneComponent } from './main/airplane/airplane.component';
import { SystemComponent } from './main/system/system.component';
import { UploadComponent } from './main/upload/upload.component';
import { SharedComponent } from './shared/shared.component';
import { SignupComponent } from './signup/signup.component';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import { SwlocationComponent } from './main/swlocation/swlocation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    AirplaneComponent,
    SystemComponent,
    UploadComponent,
    SharedComponent,
    SignupComponent,
    SwlocationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
