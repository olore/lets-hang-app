import {OnInit} from "@angular/core";
import {Page} from 'ionic-angular';
import {Modal, NavController} from "ionic-angular/index";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

import {HangViewMini} from "../../components/hang-view-mini/hang-view-mini-component"
import {HangListService} from "./hang-list-service";
import {CreateHangPage} from "../createHangPage/create-hang-page";
import {MeService} from "../../services/me-service";
import {Person} from "../../models/person-model";
import {Hang} from "../../models/hang-model";
import {ConnectionService} from "../../services/connection-service";

@Page({
  templateUrl: 'build/pages/hangListPage/hang-list-page.html',
  directives: [HangViewMini],
  providers: [ConnectionService]
})

export class HangListPage implements OnInit {

  me: Person;
  isLoading: boolean = true;
  isConnected: boolean = false;
  modal: Modal;
  upcomingHangs: Hang[] = [];
  incomingHangs: Hang[] = [];
  subscription: Subscription;
  allObservable: Observable<Hang>;

  // Note: constructor is called on every access of the page
  constructor(
    public nav: NavController,
    public hangListService: HangListService,
    public connService: ConnectionService,
    public meService: MeService) {

    this.me = meService.getMe();
  }

  ngOnInit() {
    this.connService.isConnected().subscribe(
      isConnected => {
        isConnected ? this.subscribeMe() : this.unsubscribeMe();
      }
    )
  }

  private unsubscribeMe() {
    this.upcomingHangs = [];
    this.incomingHangs = [];
    this.subscription && this.subscription.unsubscribe();
  }

  private subscribeMe() {
    console.log('subscribing');

    this.allObservable = this.hangListService.getAll();

    this.subscription = this.allObservable
      .subscribe(
        hang => {
          this.isLoading = false;
          if (hang.creator.equals(this.me)) {
            this.upcomingHangs.push(hang);
          } else {
            this.incomingHangs.push(hang);
          }
        }
      );
  }

  ngOnDestroy() {
    console.log('unsubscribing');
    this.unsubscribeMe();
  }

  /////////

  openCreateModal() {
    this.modal = Modal.create(CreateHangPage);
    this.nav.present(this.modal);
  }

}
