import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth/auth.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
