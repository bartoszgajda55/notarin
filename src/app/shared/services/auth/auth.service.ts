import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import 'rxjs';
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  userSubscription: Subscription;
  userData: {};

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = afAuth.authState;
  }

  loginUserWithEmail(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.userSubscription = this.user.subscribe((data) => {
        this.userData = data.toJSON();
      });
      this.router.navigate(['/dashboard']);
    }).catch(e => { console.log(e) });
  }

  registerUserWithEmail(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.userSubscription = this.user.subscribe((data) => {
        this.userData = data.toJSON();
      });
      this.router.navigate(['/dashboard']);
    }).catch(e => { console.log(e) });
  }

  logOutUser(): void {
    this.afAuth.auth.signOut();
    this.userSubscription.unsubscribe();
  }

  getLoggedUserData(): object {
    return this.userData;
  }
}
