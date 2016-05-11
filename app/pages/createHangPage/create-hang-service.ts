import {Injectable} from "angular2/core";
import {Hang} from "../../models/hang-model";

//TODO Use http to somewhere...
import {HangListService}  from '../hangListPage/hang-list-service';

@Injectable()
export class CreateHangService {

  constructor(private hangListService: HangListService) {
  }

  save(hang: Hang) {
    return this.hangListService.addHang(hang);
  }
}
