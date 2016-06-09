import {Injectable} from "@angular/core";
import * as moment from 'moment/moment';
import {Person} from "./../../models/person-model";
import {Hang} from "./../../models/hang-model";
import {Observable} from "rxjs/Observable";

import {AngularFire} from "angularfire2";

@Injectable()
export class HangListService {

  db: Firebase;

  constructor(public af: AngularFire) {
    //this.db = new Firebase('https://sizzling-inferno-1088.firebaseio.com/hangs');
    this.db = new Firebase('ws://localhost.firebaseio.test:5555/hangs');
  }

  getAll() {
    return Observable.create(observer => {
      let listener = this.db.on('child_added', snapshot => {
        let hang = Hang.fromFirebase(snapshot);
        observer.next(hang);
      }, observer.error);

      return () => {
        this.db.off('child_added', listener);
      };
    });
  }

}
