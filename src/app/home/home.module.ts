import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from "./services/login/login.service";
import {FormsModule} from "@angular/forms";
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {RegisterService} from "./services/register/register.service";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    AngularFireAuthModule
  ],
  declarations: [
    LandingPageComponent,
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    LoginService,
    RegisterService
  ]
})
export class HomeModule { }
