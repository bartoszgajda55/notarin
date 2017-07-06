import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import {RouterModule} from "@angular/router";
import { SettingsComponent } from './components/settings/settings.component';

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
    SettingsComponent
  ]
})
export class DashboardModule { }
