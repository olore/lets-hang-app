export class Person {

  public parent: Person;
  public photoUrl: string;
  public friends: Array<Person> = [];

  constructor(
    public firstName: String,
    public lastName: String) {
  }

  addFriend(p: Person) {
    this.friends.push(p);
  }
  
  setParent(p: Person) {
    this.parent = p;
  }

  getInitials() {
    return this.firstName.slice(0,1) +
        this.lastName.slice(0,1);
  }
  
  getShortName() {
    return this.firstName + ' ' +
      this.lastName.slice(0,1);
  }

  
}
