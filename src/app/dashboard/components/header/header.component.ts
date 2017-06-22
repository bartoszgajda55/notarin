import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: Subscription;
  userName: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.getLoggedUser().subscribe((data) => {
      if (data)
        this.userName = data.toJSON().displayName;
      console.log("OnInit: " + data);
    });
  }

  onLogout() {
    this.authService.logOutUser();
    this.router.navigate(['/login']);
  }

  onLogData() {
    this.user = this.authService.getLoggedUser().subscribe((data) => {
      console.log("OnLog: " + data);
    });
  }

  ngOnDestroy() {
    this.user.unsubscribe();
  }

}
