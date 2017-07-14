import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
