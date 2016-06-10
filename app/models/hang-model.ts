import * as moment from 'moment/moment';
import {Person} from "./person-model";
import {PersonStatus} from "./person-status-model";

export class Hang {
  
  public approved: boolean = false;
  public accepted: boolean = false;
  public rejected: boolean = false;
  public key: string;

  constructor(
    public creator: Person,
    public statuses: Array<PersonStatus>,
    public startDate: Date,
    public endDate: Date,
    public description: string,
    public location: string) {
  }

  /*
    - Must convert dates to string
    - Probably need to do something about Creator
    - Probably need to do something about Participants
   */
  toFirebase() {
    var personStatuses = this.statuses.map((s) => {
      return s.toFirebase();
    });

    return {
      creator: this.creator,
      statuses: personStatuses,
      startDate: moment(this.startDate).format(),
      endDate: moment(this.endDate).format(),
      description: this.description,
      location: this.location
    }
  }

  static fromFirebase<Hang>(snapshot) {
    let data = snapshot.val();
    let creator = Person.fromFirebase(data.creator);

    if (!data.statuses ) {
      data.statuses = [];
    }
    let statuses = data.statuses.map((status) => {
      return PersonStatus.fromFirebase(status)
    });

    let hang = new Hang(
      creator,
      statuses,
      moment(data.startDate).toDate(),
      moment(data.endDate).toDate(),
      data.description,
      data.location
    );
    hang.key = snapshot.key();
    hang.accepted = data.accepted;
    hang.approved = data.approved;
    return hang;

  }
}
