import {Page, ViewController, NavController, Modal} from 'ionic-angular';
import {Contacts} from 'ionic-native';
import DateGrabber from '../../components/date-grabber/date-grabber-component';
import CreateHangService from "./create-hang-service";
import {Person} from "../../models/person-model";
import {Hang} from "../../models/hang-model";
import * as moment from 'moment/moment';
import {MeService} from "../../services/me-service";

@Page({
  templateUrl: 'build/pages/createHangPage/create-hang-page.html',
  directives: [DateGrabber],
  providers: [CreateHangService]
})

export class CreateHangPage {

  me: Person;
  startDate:Date;
  whoArray: any = [];
  description: string;
  location: string;
  duration: any = "60";

  constructor(public createHangService: CreateHangService,
              public meService: MeService,
              public nav: NavController) {

    this.me = this.meService.getMe();
    console.log('My friends', this.me.friends);
  }

  showModal() {
    let modal = Modal.create(MyModal);
    this.nav.present(modal)
  }

  pickContact() {
    Contacts.pickContact()
      .then((contact) => {
        var person = new Person(contact.name.givenName, contact.name.familyName);
        person.photoUrl = contact.photos && contact.photos[0].value;
        this.me.addFriend(person);
        this.whoArray.push(person);
      })
      .catch((err) => {
        if (err === 'cordova_not_available') {
          var person = new Person('TestUser', 'One');
          this.whoArray.push(person);
          this.me.addFriend(person);
        }
      });
  }

  
  save() {
    var endDate = moment(this.startDate).add(this.duration, 'minutes').toDate();
    var me = new Person('Brian', 'Olore');
    var hang = new Hang(me, this.whoArray, this.startDate, endDate, this.description, this.location);
    this.createHangService.save(hang);
  }

  dateWasChanged(date) {
    this.startDate = date;
  }
}


@Page({
  template: `
  <ion-content padding>
    <h2>I'm a modal!</h2>
    <button (click)="close()">Close</button>
  </ion-content>`
})
class MyModal {
  constructor(public viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
