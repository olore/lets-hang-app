import {Injectable} from "angular2/core";
import {Hang} from "../../models/hang-model";
import {HangListService}  from '../hangListPage/hang-list-service'; //TODO: Remove this hack
import {AngularFire} from 'angularfire2';

@Injectable()
export class CreateHangService {

  constructor(
    public af: AngularFire
    ) {
  }

  save(hang: Hang) {
    return new Promise((resolve) => {
      console.log('pushing ', hang);

      const hangs = this.af.database.list('/hangs');
      hangs.push(hang.toFirebase());
      resolve();
    });
  }
}
