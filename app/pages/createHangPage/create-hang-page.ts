import {Page} from 'ionic-angular';
import {Contacts} from 'ionic-native';
import {ViewController} from "ionic-angular/index";
import {Output} from "@angular/core";
import * as moment from 'moment/moment';

import {DateGrabber} from '../../components/date-grabber/date-grabber-component';
import {CreateHangService} from "./../../services/create-hang-service";
import {Person} from "../../models/person-model";
import {Hang} from "../../models/hang-model";
import {MeService} from "../../services/me-service";
import {PersonStatus} from "../../models/person-status-model";

@Page({
  templateUrl: 'build/pages/createHangPage/create-hang-page.html',
  directives: [DateGrabber],
  providers: [CreateHangService]
})

export class CreateHangPage {

  me: Person;
  startDate: Date;
  whoArray: any = [];
  description: string;
  location: string;
  duration: any = "60";

  constructor(public viewCtrl: ViewController,
              public createHangService: CreateHangService,
              public meService: MeService) {

    this.me = this.meService.getMe();
  }

  pickContact() {
    Contacts.pickContact()
      .then((contact) => {

        // hack to allow me to stringify
        delete contact.birthday;
        //console.log(JSON.stringify(contact));

        let person = new Person(contact.name.givenName, contact.name.familyName);
        person.photoUrl = contact.photos && contact.photos[0].value;
        this.me.addFriend(person);
        let ps = new PersonStatus();
        ps.person = person;
        this.whoArray.push(ps);
      })
      .catch((err) => {
        if (err === 'cordova_not_available') {
          let person = new Person('TestUser', 'One');
          let ps = new PersonStatus();
          ps.person = person;
          this.me.addFriend(person);
          this.whoArray.push(ps);
        } else {
          console.log(JSON.stringify(err));
        }
      });
  }

  save() {
    let endDate = moment(this.startDate).add(this.duration, 'minutes').toDate();

    let hang = new Hang(this.me, this.whoArray,
                        this.startDate, endDate,
                        this.description, this.location);
    hang.accepted = true;
    this.createHangService.save(hang)
      .then(() => {
        this.viewCtrl.dismiss();
      });
  }

  dateWasChanged(date) {
    this.startDate = date;
  }
}