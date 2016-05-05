import {Page, NavController} from 'ionic-angular';
import {Contacts} from 'ionic-native';
import DateGrabber from '../../date-grabber/date-grabber-component';

@Page({
  templateUrl: 'build/pages/createHangPage/create-hang-page.html',
  directives: [DateGrabber]
})

export class CreateHangPage {

  myDate:Date;
  photoUrl:string;
  whoList:string = '';
  whoArray: any = [];

  constructor(nav:NavController) {
  }

  pickContact() {
    Contacts.pickContact()
      .then((contact) => {
        console.log('picked contact: ', contact);
        
        var name = contact.name.givenName + ' ' + contact.name.familyName.slice(0, 1) + '.';
        this.whoArray.push({
          name: name,
          initials: contact.name.givenName.slice(0,1) + contact.name.familyName.slice(0,1),
          photoUrl: contact.photos && contact.photos[0].value
        });
        //this.whoList = this.whoArray.join(', ');

        // if (contact.photos) {
        //   console.log('picked: ', contact.photos[0]);
        //   this.photoUrl = contact.photos[0].value;
        // }
      }, (err) => {
      })

  }

  save() {
    console.log('save called');
  }

  dateWasChanged(date) {
    this.myDate = date;
  }
}