import {Page, NavController} from 'ionic-angular';
import {Contacts} from 'ionic-native';
import DateGrabber from '../../date-grabber/date-grabber-component';

@Page({
  templateUrl: 'build/pages/createHangPage/create-hang-page.html',
  directives: [DateGrabber]
})

export class CreateHangPage {

  myDate: Date;

  constructor(nav: NavController) {
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