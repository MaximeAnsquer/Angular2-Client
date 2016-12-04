import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";
import {Observable} from "rxjs";
import {Contact} from "../contact";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers: [ContactService]
})
export class ContactsComponent implements OnInit {
  title = "Liste de vos contacts";
  contacts: Observable<Contact[]>;
  contactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

}
