import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  detailedContact : Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    detailCon
  }

  getContact(id: string) {
    this.contactService.getContact(id).subscribe(contacts => this.detailedContact = contacts);
  }

}
