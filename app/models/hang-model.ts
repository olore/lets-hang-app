import {Person} from "./person-model";
import * as moment from 'moment/moment';

export class Hang {
  
  public approved: boolean = false;
  public accepted: boolean = false;
  
  constructor(
    public creator: Person,
    public participants: Array<Person>,
    public startDate: Date,
    public endDate: Date,
    public description: string) {
  }

}
