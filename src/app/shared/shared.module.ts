import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "./services/auth/auth.service";
import {AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  imports: [
    CommonModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
