import {Component, Input, OnInit} from "@angular/core";
import * as moment from 'moment/moment';
import {NavController} from "ionic-angular/index";
import {HangViewPage} from "../../pages/hangViewPage/hang-view-page";
import {Person} from "../../models/person-model";
import {MeService} from "../../services/me-service";
import {PersonStatus} from "../../models/person-status-model";
import {Hang} from "../../models/hang-model";

@Component({
  selector: 'hang-view-mini',
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
    meService: MeService) {

    this.me = meService.getMe();
  }

  ngOnInit() {
    this.formattedStartDate = this.formatDate(this.hang.startDate);
    this.formattedParticipants = this.formatParticipants(this.hang.statuses);
  }

  showHang() {
    this.nav.push(HangViewPage, {hang: this.hang});
  }

  toggleAccepted() {
    this.hang.accepted = !this.hang.accepted;
  }

  formatDate(date) {
    return moment(date).format('ddd, MMM Do, h:mm A');
  }

  // TODO replace this with a component that does initials/picture
  formatParticipants(statuses: Array<PersonStatus>) {
    var x = statuses.map((status) => {
      return status.person.getShortName();
    });
    return x.join(', ');
  }

}

  