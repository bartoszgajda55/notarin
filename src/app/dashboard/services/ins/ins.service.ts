import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import 'rxjs';

@Injectable()
export class InsService {
  items: FirebaseListObservable<any[]>;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.items = db.list('ins');
  }

  createIn(value: number): void {
    // TODO
  }

}
