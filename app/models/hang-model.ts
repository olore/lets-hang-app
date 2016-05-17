import * as moment from 'moment/moment';
import {Person} from "./person-model";

export class Hang {
  
  public approved: boolean = false;
  public accepted: boolean = false;
  public key: String;

  constructor(
    public creator: Person,
    public participants: Array<Person>,
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
    return {
      creator: this.creator,
      participants: this.participants,
      startDate: moment(this.startDate).format(),
      endDate: moment(this.endDate).format(),
      description: this.description,
      location: this.location
    }
  }
}
