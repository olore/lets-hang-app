import {Component, OnInit, EventEmitter, Output} from "angular2/core";
import * as moment from 'moment/moment';
import DateGrabberService from './date-grabber-service';

@Component({
  inputs: ['thedate'],
  selector: 'date-grabber',
  providers: [DateGrabberService],
  templateUrl: 'build/components/date-grabber/date-grabber-component.html'
})

export default class DateGrabber implements OnInit {

  // Inputs
  thedate: Date;

  @Output()
  onDateChanged: EventEmitter<Date>;

  constructor(private dateGrabberService: DateGrabberService) {
    this.onDateChanged = new EventEmitter();
  }

  ngOnInit(): void {
    this.thedate = this.thedate ? this.thedate : moment().add(1, 'day').minute(0).toDate();
  }


  pickDate() {
    this.dateGrabberService.getDate(this.thedate)
      .then((date) => {
        this.thedate = date;
        this.onDateChanged.emit(this.thedate);
      })
      .catch((err) => {
        if (err === 'cordova_not_available') {
          this.thedate = new Date(0);
          this.onDateChanged.emit(this.thedate);
        } else {
          console.error("grabbed date ERROR ", err);
        }
      })
  }


  // can't use DatePipe because only works reliably in Chrome & Opera
  // https://angular.io/docs/ts/latest/api/common/DatePipe-class.html
  getDateForUI() {
    return moment(this.thedate).format('ddd, MMM Do, h:mm A');
  }



}
