import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';

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
    this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(e => {
      if(e) {
        console.log(e);
      }
    }).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  registerUserWithEmail(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(e => {
      if(e)
        console.log(e);
    }).then(() => {
      this.router.navigate(['/dashboard']);
    });
  }

}