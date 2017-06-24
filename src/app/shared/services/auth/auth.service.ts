import {Injectable} from '@angular/core';
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

  loginUserWithEmail(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/dashboard']);
    }).catch(e => { console.log(e) });
  }

  registerUserWithEmail(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/dashboard']);
    }).catch(e => { console.log(e) });
  }

  logOutUser(): void {
    this.afAuth.auth.signOut();
  }

  getLoggedUser(): Observable<firebase.User> {
    return this.user;
  }
}
