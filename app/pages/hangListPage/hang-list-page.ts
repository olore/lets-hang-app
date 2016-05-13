import {Page} from 'ionic-angular';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {HangViewMini} from "../../components/hang-view-mini/hang-view-mini-component"
import {HangListService} from "./hang-list-service";
import {OnInit} from "angular2/core";
import {Modal} from "ionic-angular/index";
import {NavController} from "ionic-angular/index";
import {CreateHangPage} from "../createHangPage/create-hang-page";


@Page({
  templateUrl: 'build/pages/hangListPage/hang-list-page.html',
  directives: [ROUTER_DIRECTIVES, HangViewMini],
})

export class HangListPage implements OnInit {

  modal;
  upcomingHangs: any = [];
  incomingHangs: any = [];

  // Note: constructor is called on every access of the page
  constructor(public nav: NavController,
    public hangListService: HangListService) {
  }

  ngOnInit() {
    this.loadData();
  }

  /////////

  openCreateModal() {
    this.modal = Modal.create(CreateHangPage);
    this.nav.present(this.modal);
    this.modal.onDismiss(() => this.loadData);
  }


  /////////

  private loadData() {
    this.hangListService.getUpcoming()
      .then((upcoming) => this.upcomingHangs = upcoming);

    this.hangListService.getIncoming()
      .then((incoming) => this.incomingHangs = incoming);
  }


}
