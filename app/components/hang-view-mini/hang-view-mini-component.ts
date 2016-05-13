import {Component, Input, OnInit} from "angular2/core";
import * as moment from 'moment/moment';
import {NavController} from "ionic-angular/index";
import {HangViewPage} from "../../pages/hangViewPage/hang-view-page";
import {Person} from "../../models/person-model";
import {MeService} from "../../services/me-service";

@Component({
  selector: 'hang-view-mini',
  templateUrl: 'build/components/hang-view-mini/hang-view-mini-component.html'
})

export class HangViewMini implements OnInit {

  @Input()
  hang: any;
  me: Person;

  formattedStartDate: any;
  formattedParticipants: any;

  constructor(public nav: NavController,
  meService: MeService) {
    this.me = meService.getMe();
  }

  ngOnInit() {
    this.formattedStartDate = this.formatDate(this.hang.startDate);
    this.formattedParticipants = this.formatParticipants(this.hang.participants);
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
  formatParticipants(participants: Array<Person>) {
    var x = participants.map((participant) => {
      return participant.getShortName();
    });
    return x.join(', ');
  }

}

  