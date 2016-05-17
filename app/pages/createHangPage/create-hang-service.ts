import {Injectable} from "angular2/core";
import {Hang} from "../../models/hang-model";
import {HangListService}  from '../hangListPage/hang-list-service'; //TODO: Remove this hack
import * as moment from 'moment/moment';
import {AngularFire} from 'angularfire2';

@Injectable()
export class CreateHangService {

  url = 'https://sizzling-inferno-1088.firebaseio.com/';

  constructor(
    public af: AngularFire
    ) {
  }

  save(hang: Hang) {
    return new Promise((resolve) => {
      console.log('pushing ', hang);
      hang.startDate = moment(hang.startDate).format();
      hang.endDate = moment(hang.endDate).format();
      var ref = new Firebase(this.url);
      ref.child('/hangs').push(hang);
      resolve();
    });
  }
}
