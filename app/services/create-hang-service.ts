import {Injectable} from "@angular/core";
import {Hang} from "../models/hang-model";
import {HangListService}  from '../pages/hangListPage/hang-list-service'; //TODO: Remove this hack
import {AngularFire} from 'angularfire2';

@Injectable()
export class CreateHangService {

  constructor(
    public af: AngularFire
    ) {
  }

  save(hang: Hang) {
    return new Promise((resolve) => {

      const hangs = this.af.database.list('/hangs');
      hangs.push(hang.toFirebase());
      resolve();
    });
  }
}
