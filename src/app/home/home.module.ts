import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from "./services/login/login.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  declarations: [
    LandingPageComponent,
    RegisterComponent,
    LoginComponent
  ],
  providers: [LoginService]
})
export class HomeModule { }
