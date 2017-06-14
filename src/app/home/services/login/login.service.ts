import { Injectable } from '@angular/core';
import * as firebase from "firebase";

@Injectable()
export class LoginService {

  constructor() {
    let config = {
      apiKey: "AIzaSyCn4BUDj6l-hSRaxklGIoyvx3J77yNoWg0",
      authDomain: "notarin-4e611.firebaseapp.com",
      databaseURL: "https://notarin-4e611.firebaseio.com",
      projectId: "notarin-4e611",
      storageBucket: "notarin-4e611.appspot.com",
      messagingSenderId: "406974796898"
    };
    firebase.initializeApp(config);
  }

}
