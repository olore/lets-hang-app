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
    this.db = new Firebase('https://sizzling-inferno-1088.firebaseio.com/hangs');
  }

  getAll() {
    return Observable.create(observer => {
      let listener = this.db.on('child_added', snapshot => {
        let hang = this.createHangFromFirebase(snapshot);
        observer.next(hang);
      }, observer.error);

      return () => {
        this.db.off('child_added', listener);
      };
    });
  }

  //////////////

  // meh why do i have to objectify these guys too ?  :(
  createHangFromFirebase(snapshot) {
    let data = snapshot.val();
    let creator = new Person(data.creator.firstName, data.creator.lastName);

    let participants = [];

    if (data.participants) {
      participants = data.participants.map((u) => {
        return new Person(u.firstName, u.lastName);
      });
    }

    let hang = new Hang(
      creator,
      participants,
      moment(data.startDate).toDate(),
      moment(data.endDate).toDate(),
      data.description,
      data.location
    );
    hang.key = snapshot.key();
    return hang;
  }

}
