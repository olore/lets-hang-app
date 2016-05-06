import {Injectable} from "angular2/core";
import {Hang} from "../../models/hang-model";

//TODO Use http to somewhere...

@Injectable()
export default class CreateHangService {

  constructor() {
  }

  save(hang: Hang) {
    console.log('Going to create a new Hang:', hang);
    console.log('location', hang.location);
  }
}
