import {Injectable} from "@angular/core";
import {Person} from "../models/person-model";

@Injectable()
export class MeService {  //aka currentUser

  me: Person;

  constructor() {
    console.log('mesService constructed');
  }

  setMe() {
    this.me = new Person('Brian', 'Olore');
  }
  
  getMe() {
    return this.me;
  }
}
