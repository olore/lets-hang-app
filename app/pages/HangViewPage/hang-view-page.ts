import {Page, NavController, NavParams} from 'ionic-angular';
import {Hang} from "../../models/hang-model";

@Page({
  templateUrl: 'build/pages/hangViewPage/hang-view-page.html',
})

export class HangViewPage {

  hang: Hang;

  constructor(navParams: NavParams) {
    this.hang = navParams.get('hang');
  }

}