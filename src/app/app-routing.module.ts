import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from "app/home/components/landing-page/landing-page.component";
import {LoginComponent} from "./home/components/login/login.component";
import {RegisterComponent} from "./home/components/register/register.component";
import {MainComponent} from "./dashboard/components/main/main.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent, children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  {path: 'dashboard', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
