import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import {RouterModule} from "@angular/router";
import { SettingsComponent } from './components/settings/settings.component';
import { InsComponent } from './components/ins/ins.component';
import { OutsComponent } from './components/outs/outs.component';
import {InsService} from "./services/ins/ins.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MainComponent,
    NavbarComponent,
    HeaderComponent,
    OverviewComponent,
    SettingsComponent,
    InsComponent,
    OutsComponent
  ],
  providers: [
    InsService
  ]
})
export class DashboardModule { }
