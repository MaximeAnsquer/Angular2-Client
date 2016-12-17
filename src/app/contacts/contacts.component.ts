import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from "../contact";
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  entryComponents: [ContactFormComponent],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  constructor(private cs: ContactService) {
    this.cs.contactAddedEvent.subscribe(
      result => this.getContacts()
    )
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() : void {
    this.cs.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  deleteContact(id: string) : void {
    this.cs.deleteContact(id).subscribe(() => {
        let index = this.contacts.findIndex(c => c._id === id);
        console.log('index: ' + index);
        this.contacts.splice(index, 1);
      }
    );
  }

  addFakeContacts() {
    this.cs.addFakeContacts().subscribe(
      result => this.getContacts()
    )
  }

  setEditedContact(contact: Contact) {
    this.cs.contactEditedEvent.emit(contact);
  }

  setDetailedContact(contact: Contact) {
    this.cs.contactDetailedEvent.emit(contact);
  }

}
