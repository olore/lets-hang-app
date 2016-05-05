import {Page} from 'ionic-angular';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HangViewMini} from "../../hang-view-mini/hang-view-mini-component"

@Page({
  templateUrl: 'build/pages/hangListPage/hang-list-page.html',
  directives: [ROUTER_DIRECTIVES, HangViewMini],
})

export class HangListPage {

  upcomingHangs: any = [];
  incomingHangs: any = [];

  constructor() {
    this.upcomingHangs = [
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

    this.incomingHangs = [
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
