import {Injectable} from "@angular/core";
import * as moment from 'moment/moment';
import {Person} from "./../../models/person-model";
import {Hang} from "./../../models/hang-model";
import {Observable} from "rxjs/Observable";

import {AngularFire} from "angularfire2";
import {FirebaseConfigWrapper} from "../../firebase";

@Injectable()
export class HangListService {

  db: Firebase;

  constructor() {
    //FIXME why am I using Firebase & not angularfire2 here?
    this.db = new Firebase(FirebaseConfigWrapper.getWSUrl() + '/hangs');
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
