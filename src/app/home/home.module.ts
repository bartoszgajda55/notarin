import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {AngularFireAuthModule} from "angularfire2/auth";

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
  providers: []
})
export class HomeModule { }
