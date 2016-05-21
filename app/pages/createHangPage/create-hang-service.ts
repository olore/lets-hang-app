import {Injectable} from "@angular/core";
import {Hang} from "../../models/hang-model";
import {HangListService}  from '../hangListPage/hang-list-service'; //TODO: Remove this hack

@Injectable()
export class CreateHangService {

  constructor(private hangListService: HangListService) { //TODO: Remove this hack
  }

  save(hang: Hang) {
    //TODO save it through some HTTP API

    return new Promise((resolve) => {

      // TODO figure out how to let the upcomingHangs know about this new one
      this.hangListService.upcomingHangs.push(hang); //TODO: Remove this hack
      resolve();
    });
  }
}
