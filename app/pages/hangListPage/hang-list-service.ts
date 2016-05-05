import {Injectable} from "angular2/core";

//TODO Use http to somewhere...

@Injectable()
export default class HangListService {

  constructor() {
  }

  getIncoming() {
    return Promise.resolve(this.fetchIncoming());
  }

  getUpcoming() {
    return Promise.resolve(this.fetchUpcoming());
  }


  fetchUpcoming() {
    return [
      {
        who: 'Kurt A. and Eric B.',
        time: 'Monday 4pm',
        description: 'Going to the movies to see Star Wars',
        approved: true,
        accepted: true
      },
      {
        who: 'Bill C. and Mike D.',
        time: 'Wed 7pm',
        description: 'Going the Salt Lake City Bees game',
        approved: false,
        accepted: false,
      }
    ];
  }

  fetchIncoming() {
    return [
      {
        who: 'Mary C. and Kim T.',
        time: 'Sunday 11am',
        description: 'Brunch',
        approved: true,
        accepted: false,
      },
      {
        who: 'Mark Q. and Matt S.',
        time: 'Sat 7pm',
        description: 'Hiking',
        approved: false,
        accepted: false,
      }
    ];
  }

}
