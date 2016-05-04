import {Page} from 'ionic-angular';
import {Contacts} from 'ionic-native';
import DateGrabberService from '../../date-grabber-service';
import * as moment from 'moment/moment';

@Page({
  providers:[DateGrabberService],
  templateUrl: 'build/pages/page3/page3.html'
})

export class Page3 {

  whenDate: Date;

  constructor(private dateGrabberService: DateGrabberService) {
    this.whenDate = moment().add(1, 'day').minute(0).toDate();
  }

  pickDate() {
    this.dateGrabberService.getDate(this.whenDate)
      .then((date) => {
        this.whenDate = date;
      })
      .catch((err) => {
        if (err === 'cordova_not_available') {
          this.whenDate = new Date(0);
        } else {
          console.error("grabbed date ERROR ", err);
        }
      })
  }

  pickContact() {
    Contacts.pickContact()
    .then((contact) => {
      console.log('picked: ' + contact);
    }, (err) => {})

  }

  // can't use DatePipe because only works reliably in Chrome & Opera
  // https://angular.io/docs/ts/latest/api/common/DatePipe-class.html
  getWhenDateForUI() {
    return moment(this.whenDate).format('ddd, MMM Do, h:mm A');
  }



}
