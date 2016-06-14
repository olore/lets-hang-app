import {Person} from "./person-model";

export class PersonStatus {

  public person: Person;
  public accepted: boolean;
  public declined: boolean;

  public toFirebase() {
    var out = {
      person: this.person.toFirebase()
    };

    if (this.accepted !== undefined) {
      out['accepted'] = this.accepted;
    }
    if (this.declined !== undefined) {
      out['declined'] = this.accepted;
    }

    return out;
  }

  static fromFirebase<PersonStatus>(data) {
    console.log(data);
    let ps = new PersonStatus();
    ps.person = Person.fromFirebase(data.person);
    ps.accepted = data.accepted;
    ps.declined = data.declined;
    return ps;
  }
}