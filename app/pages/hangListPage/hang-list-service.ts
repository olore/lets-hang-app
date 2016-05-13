import {Injectable} from "angular2/core";
import {Person} from "./../../models/person-model";
import {Hang} from "./../../models/hang-model";

@Injectable()
export class HangListService {

  public upcomingHangs = [];

  constructor() {
  }

  getIncoming() {
    return Promise.resolve(this.fetchIncoming());
  }

  getUpcoming() {
    return Promise.resolve(this.fetchUpcoming());
  }


  fetchUpcoming() {
    //TODO retrieve it through some HTTP API
    return this.upcomingHangs;
  }

  fetchIncoming() {
    //TODO retrieve it through some HTTP API
    return [ ];
  }

}
