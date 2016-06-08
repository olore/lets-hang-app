import {Page} from 'ionic-angular';
import {HangViewMini} from "../../components/hang-view-mini/hang-view-mini-component"
import {HangListService} from "./hang-list-service";
import {OnInit} from "@angular/core";
import {Modal, NavController} from "ionic-angular/index";
import {CreateHangPage} from "../createHangPage/create-hang-page";
import {MeService} from "../../services/me-service";
import {Person} from "../../models/person-model";
import {Hang} from "../../models/hang-model";

import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Page({
  templateUrl: 'build/pages/hangListPage/hang-list-page.html',
  directives: [HangViewMini],
})

export class HangListPage implements OnInit {

  me: Person;
  isLoading: boolean;
  modal: Modal;
  upcomingHangs: Hang[] = [];
  incomingHangs: Hang[] = [];
  subscription: Subscription;

  // Note: constructor is called on every access of the page
  constructor(
    public nav: NavController,
    public hangListService: HangListService,
    public meService: MeService) {

    this.me = meService.getMe();
    this.isLoading = true;
  }

  ngOnInit() {
    this.subscription = this.hangListService.getAll()
      .subscribe(hang => {
        this.isLoading = false;
        if (hang.creator.equals(this.me)) {
          this.upcomingHangs.push(hang);
        } else {
          this.incomingHangs.push(hang);
        }

      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /////////

  openCreateModal() {
    this.modal = Modal.create(CreateHangPage);
    this.nav.present(this.modal);
  }

}
