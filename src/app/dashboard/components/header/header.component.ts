import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: {};

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.getLoggedUserData();
    console.log(this.user);
  }

  onLogout() {
    this.authService.logOutUser();
    this.router.navigate(['/login']);
  }

}
