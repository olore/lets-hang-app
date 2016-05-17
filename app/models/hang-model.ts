import {Person} from "./person-model";

export class Hang {
  
  public approved: boolean = false;
  public accepted: boolean = false;
  public key: String;

  constructor(
    public creator: Person,
    public participants: Array<Person>,
    public startDate: any, //Date,
    public endDate: any, //Date,
    public description: string,
    public location: string) {
  }

}
