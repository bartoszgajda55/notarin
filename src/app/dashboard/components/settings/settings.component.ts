import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../../shared/services/auth/auth.service";
import {Subscription} from "rxjs/Subscription";
import {User} from 'app/shared/models/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  private user: User;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.sub = this.authService.getLoggedUser().subscribe((value) => {
      this.user = new User(value.toJSON()['providerData'][0]);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
