import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import {AngularFireAuth} from "angularfire2/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  onRegister() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).catch(e => {
        if(e)
          console.log(e);
        else
          this.router.navigate(['/dashboard']);
    });
  }

}
