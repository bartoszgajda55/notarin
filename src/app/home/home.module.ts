import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    LandingPageComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class HomeModule { }
