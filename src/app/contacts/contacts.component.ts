import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from "../contact";
import {ContactFormComponent} from "../contact-form/contact-form.component";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  entryComponents: [ContactFormComponent],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  title = "Liste de vos contacts";
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() : void {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  deleteContact(id: string) : void {
    this.contactService.deleteContact(id).subscribe(() => {
        let index = this.contacts.findIndex(c => c._id === id);
        console.log('index: ' + index);
        this.contacts.splice(index, 1);
      }
    );
  }

  addFakeContacts() {
    this.contactService.addFakeContacts().subscribe(
      result => this.getContacts()
    )
  }

}
