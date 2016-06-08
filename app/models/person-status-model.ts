import {Person} from "./person-model";

export class PersonStatus {

  public person: Person;
  public accepted: boolean;
  public declined: boolean;

  public toFirebase() {
    return {
      person: this.person.toFirebase(),
      accepted: this.accepted || false,
      declined: this.declined || false
    }
  }

  static fromFirebase<PersonStatus>(data) {
    let ps = new PersonStatus();
    ps.person = Person.fromFirebase(data.person);
    ps.accepted = data.accepted || false;
    ps.declined = data.declined || false;
    return ps;
  }
}