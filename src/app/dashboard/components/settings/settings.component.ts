import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.authService.getLoggedUser().subscribe((value) => {

    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
