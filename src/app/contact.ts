export class Contact {
  firstName: string;
  lastName: string;
  _id: string;

  constructor(firstName: string, lastName: string, id: string) {
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
