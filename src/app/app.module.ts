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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import { SwlocationComponent } from './main/swlocation/swlocation.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {NgxUiLoaderConfig, NgxUiLoaderModule} from "ngx-ui-loader";
import { UserComponent } from './main/user/user.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  'bgsColor': '#50a4ed',
  'bgsOpacity': 0.5,
  'bgsPosition': 'top-right',
  'bgsSize': 70,
  'bgsType': 'three-strings',
  'blur': 5,
  'fgsColor': '#50a4ed',
  'fgsPosition': 'center-center',
  'fgsSize': 90,
  'fgsType': 'three-strings',
  'gap': 24,
  'logoPosition': 'center-center',
  'logoSize': 120,
  'logoUrl': '',
  'overlayColor': 'rgba(40,40,40,0.15)',
  'pbColor': '#50a4ed',
  'pbDirection': 'ltr',
  'pbThickness': 3,
  'hasProgressBar': true,
  'text': 'Chargement en cours...',
  'textColor': '#50a4ed',
  'textPosition': 'center-center'
};

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
    SwlocationComponent,
    UserComponent
  ],
  imports: [
    FormsModule,
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
    MatOptionModule,
    MatSelectModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
