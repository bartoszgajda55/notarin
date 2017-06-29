import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from "app/home/components/landing-page/landing-page.component";
import {LoginComponent} from "./home/components/login/login.component";
import {RegisterComponent} from "./home/components/register/register.component";
import {MainComponent} from "./dashboard/components/main/main.component";
import {HomeComponent} from "./home/components/home/home.component";
import {OverviewComponent} from "./dashboard/components/overview/overview.component";
import {AuthGuard} from "./shared/guards/auth.guard";

const routes: Routes = [
  {path: '', component: LandingPageComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
  ]},
  {path: 'dashboard', component: MainComponent, canActivate: [AuthGuard], children: [
    {path: 'overview', component: OverviewComponent},
    {path: '', redirectTo: 'overview', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
