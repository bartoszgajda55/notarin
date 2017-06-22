import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import "rxjs";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }

  loginUserWithEmail(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.user.subscribe((user) => {
        console.log(user.toJSON());
      });
      this.router.navigate(['/dashboard']);
    }).catch(e => { console.log(e) });
  }

  registerUserWithEmail(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.user.subscribe((user) => {
        console.log(user.toJSON());
      });
      this.router.navigate(['/dashboard']);
    }).catch(e => { console.log(e) });
  }

}
