import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }

  ngOnInit() {
  }

  onLogin() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).catch(e => {
      if(e) {
        console.log(e);
      }
    }).then(a => {
      this.router.navigate(['/dashboard']);
    });
  }

}
