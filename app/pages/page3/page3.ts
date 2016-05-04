import {Page} from 'ionic-angular';
import {Contacts} from 'ionic-native';
import DateGrabber from '../../date-grabber/date-grabber-component';

@Page({
  templateUrl: 'build/pages/page3/page3.html',
  directives: [DateGrabber]
})

export class Page3 {

  myDate: Date;

  constructor() {
  }

  pickContact() {
    Contacts.pickContact()
    .then((contact) => {
      console.log('picked: ' + contact);
    }, (err) => {})

  }

  save() {
    console.log('save called');
  }

  dateWasChanged(date) {
    this.myDate = date;
  }
}