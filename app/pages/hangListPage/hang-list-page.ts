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
import 'rxjs/add/operator/map';

//import {} from "rxjs/operator/map";

@Page({
  templateUrl: 'build/pages/hangListPage/hang-list-page.html',
  directives: [HangViewMini],
})

export class HangListPage implements OnInit {

  me: Person;
  isLoading: boolean;
  modal: Modal;
  upcomingHangs; //: Observable<Hang>;
  incomingHangs: any; //Observable<Hang>;
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
    //this.heroes = this._heroService.getHeroes()
    //  .subscribe(heroes => this.heroes = heroes);

    this.incomingHangs = this.hangListService.getAll();

    this.incomingHangs
      .map((hang) => {
        console.log('hang', hang);
        return hang;
      })
      .subscribe(hangs => {
        console.log('hangs', hangs);
        this.isLoading = false
      });

    //this.incomingHangs = this.hangListService.getAll()
    //  .subscribe(() => this.isLoading = false);

      //.map(hang => {
      //  console.log('hang', typeof hang);
      //  console.log('hang', hang);
      //  if (hang.creator.equals(this.me)) {
      //    Observable.from(hang);
      //  } else {
      //    this.incomingHangs.push(hang);
      //  }
      //})

     //this.incomingHangs.subscribe(() => {
     //  this.isLoading = false;
     //});
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
