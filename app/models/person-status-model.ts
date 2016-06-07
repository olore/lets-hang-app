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
    console.log('PersonStatus fromFirebase', data);
    ps.person = Person.fromFirebase(data.person);
    console.log('PersonStatus - Person fromFirebase', ps.person);
    ps.accepted = data.accepted || false;
    ps.declined = data.declined || false;
    console.log('PersonStatus fromFirebase', ps);
    return ps;
  }
}