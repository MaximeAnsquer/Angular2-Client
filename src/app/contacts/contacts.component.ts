import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from "../contact";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  title = "Liste de vos contacts";
  contacts: Contact[];
  detailedContact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

}
