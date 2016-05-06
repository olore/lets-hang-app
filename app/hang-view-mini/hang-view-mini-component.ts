import {Component, Input, OnInit} from "angular2/core";
import * as moment from 'moment/moment';

@Component({
  selector: 'hang-view-mini',
  templateUrl: 'build/hang-view-mini/hang-view-mini-component.html'
})

export class HangViewMini implements OnInit {

  @Input()
  hang: any;

  formattedStartDate: any;
  formattedParticipants: any;

  constructor() {
  }

  ngOnInit() {
    this.formattedStartDate = this.formatDate(this.hang.startDate);
    this.formattedParticipants = this.formatParticipants(this.hang.participants);
  }

  formatDate(date) {
    return moment(date).format('ddd, MMM Do, h:mm A');
  }

  // TODO replace this with a component that does initials/picture
  formatParticipants(participants) {
    var x = participants.map((participant) => {
      return participant.getShortName();
    });
    return x.join(', ');
  }

}

  