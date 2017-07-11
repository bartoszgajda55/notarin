import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./home/home.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {SharedModule} from "./shared/shared.module";
import {AuthGuard} from "./shared/guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    DashboardModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
