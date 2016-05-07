import {Page} from 'ionic-angular';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HangViewMini} from "../../components/hang-view-mini/hang-view-mini-component"
import HangListService from "./hang-list-service";

@Page({
  templateUrl: 'build/pages/hangListPage/hang-list-page.html',
  directives: [ROUTER_DIRECTIVES, HangViewMini],
  providers: [HangListService]
})

export class HangListPage {

  upcomingHangs: any = [];
  incomingHangs: any = [];

  // Note: constructor is called on every access of the page
  constructor(hangListService: HangListService) {
    hangListService.getUpcoming()
      .then((upcoming) => this.upcomingHangs = upcoming);

    hangListService.getIncoming()
      .then((incoming) => this.incomingHangs = incoming);
  }

}
