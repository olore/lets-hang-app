import {Component, Input, OnInit} from "@angular/core";
import * as moment from 'moment/moment';
import {NavController} from "ionic-angular/index";
import {HangViewPage} from "../../pages/hangViewPage/hang-view-page";
import {Person} from "../../models/person-model";
import {MeService} from "../../services/me-service";
import {PersonStatus} from "../../models/person-status-model";
import {Hang} from "../../models/hang-model";
import {HangService} from "../../services/hang-service";

@Component({
  selector: 'hang-view-mini',
  providers: [HangService],
  templateUrl: 'build/components/hang-view-mini/hang-view-mini-component.html'
})

export class HangViewMini implements OnInit {

  @Input()
  hang: Hang;
  me: Person;

  formattedStartDate: any;
  formattedParticipants: any;

  constructor(
    public nav: NavController,
    public hangService: HangService,
    meService: MeService) {

    this.me = meService.getMe();
  }

  ngOnInit() {
    console.log('hangViewMini init');
    this.formattedStartDate = this.formatDate(this.hang.startDate);
    this.formattedParticipants = this.formatParticipants(this.hang.statuses);
  }

  showHang() {
    this.nav.push(HangViewPage, {hang: this.hang});
  }

  /*
    Accepted -> Declined -> Undecided -> Accepted
   */
  toggleStatus() {
    let currentStatus = this.hang.getStatusFor(this.me);

    if (currentStatus.accepted) {
      currentStatus.accepted = false;
      currentStatus.declined = true;
    } else if (currentStatus.declined) {
      delete currentStatus.accepted;
      delete currentStatus.declined;
    } else {
      currentStatus.accepted = true;
      currentStatus.declined = false;
    }
    this.hangService.save(this.hang);
  }

  formatDate(date) {
    return moment(date).format('ddd, MMM Do, h:mm A');
  }

  // TODO replace this with a component that does initials/picture
  formatParticipants(statuses: Array<PersonStatus>) {
    return statuses.map(status => status.person.getShortName()).join(', ');
  }

}

  