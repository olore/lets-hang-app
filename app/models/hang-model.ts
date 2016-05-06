import {Person} from "./person-model";

export class Hang {
  
  public approved: boolean = false;
  public accepted: boolean = false;

  constructor(
    public creator: Person,
    public participants: Array<Person>,
    public startDate: Date,
    public endDate: Date,
    public description: string,
    public location: string) {
  }

}
