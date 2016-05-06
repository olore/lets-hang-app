export class Person {

  public parent: Person;

  constructor(
    public firstName: String,
    public lastName: String) {
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
