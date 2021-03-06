export class Person {

  public parent: Person;
  public photoUrl: string;
  public friends: Array<Person> = [];
  public key;

  constructor(
    public firstName: String,
    public lastName: String) {
  }

  toFirebase() {
    return {
      firstName: this.firstName,
      lastName: this.lastName
    }
  }

  static fromFirebase<Person>(data) {
    return new Person(data.firstName, data.lastName);
  }

  // For now ... eventually compare firebase ids ?
  equals(otherPerson) {
    return otherPerson.firstName === this.firstName
      && otherPerson.lastName === this.lastName;
  }

  addFriend(p: Person) {
    this.friends.push(p);
  }
  
  setParent(p: Person) {
    this.parent = p;
  }

  getInitials() {
    if (this.firstName && this.lastName) {
      return this.firstName.slice(0, 1) +
        this.lastName.slice(0, 1);
    } else {
      return "??";
    }
  }
  
  getShortName() {
    if (this.firstName && this.lastName) {
      return this.firstName + ' ' +
        this.lastName.slice(0, 1);
    } else {
      return this.firstName;
    }
  }

  
}
