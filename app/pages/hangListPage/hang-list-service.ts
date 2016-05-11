import {Injectable} from "angular2/core";
import {Person} from "./../../models/person-model";
import {Hang} from "./../../models/hang-model";

//TODO Use http to somewhere...

@Injectable()
export class HangListService {

  public upcomingHangs = [];

  constructor() {
  }

  addHang(hang) {
    return new Promise((resolve) => {
      this.upcomingHangs.push(hang);
      resolve();
    });
  }

  getIncoming() {
    return Promise.resolve(this.fetchIncoming());
  }

  getUpcoming() {
    return Promise.resolve(this.fetchUpcoming());
  }


  fetchUpcoming() {
    /*
    let me = new Person('Brian', 'Olore');
    let kurt = new Person('Kurt', 'Hoyt');
    let eric = new Person('Eric', 'Stolten');
    let bill = new Person('Bill', 'Croo');

    let h1 = new Hang(me, [eric, bill], new Date(), new Date(), 'Going to the movies', 'Cinema One');
    h1.approved = true;
    */

    return this.upcomingHangs;
  }

  fetchIncoming() {
    let me = new Person('Brian', 'Olore');
    let kurt = new Person('Kurt', 'Hoyt');
    let eric = new Person('Eric', 'Stolten');
    let bill = new Person('Bill', 'Croo');

    let h1 = new Hang(kurt,  [eric, bill], new Date(), new Date(), 'Angular conference lunch across the street next to the Taco Bell, about a mile away', 'Utah');
    h1.accepted = true;

    return [
      //h1,
      //new Hang(me,  [bill, kurt], new Date(), new Date(), 'Taxi back to airport', 'EWR'),
      //h1,
      //new Hang(me,  [bill, kurt], new Date(), new Date(), 'Taxi back to airport', 'EWR'),
      //h1,
      //new Hang(me,  [bill, kurt], new Date(), new Date(), 'Taxi back to airport', 'EWR'),
    ];
  }

}
