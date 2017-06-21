import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.loginUserWithEmail(this.email, this.password);
  }

}
