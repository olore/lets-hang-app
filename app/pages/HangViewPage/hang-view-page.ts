import {Page, NavController, NavParams} from 'ionic-angular';
import {Hang} from "../../models/hang-model";
import * as moment from 'moment/moment';

@Page({
  templateUrl: 'build/pages/hangViewPage/hang-view-page.html',
})

export class HangViewPage {

  hang: Hang;
  diff: number;

  constructor(navParams: NavParams) {
    this.hang = navParams.get('hang');
    this.diff = moment(this.hang.endDate)
      .diff(moment(this.hang.startDate), 'hours');
  }

}