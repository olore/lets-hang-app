import {Injectable} from "@angular/core";
import {Hang} from "../models/hang-model";
import {HangListService}  from '../pages/hangListPage/hang-list-service'; //TODO: Remove this hack
import {AngularFire} from 'angularfire2';
import {FirebaseConfigWrapper} from "../firebase";

@Injectable()
export class HangService {

  db: Firebase;

  constructor(
    public af: AngularFire
    ) {


  }

  save(hang: Hang) {
    console.log('saving: ', hang.toFirebase());

    this.db = new Firebase(FirebaseConfigWrapper.getWSUrl() + '/hangs/' + hang.key);
    return this.db.update(hang.toFirebase());

    //var updates = {};
    //updates['/posts/' + newPostKey] = postData;
    //updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    //
    //return firebase.database().ref().update(updates);

    //resolve();
  }

}
