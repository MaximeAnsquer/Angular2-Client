import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
  providers: [ContactService]
})
export class ContactDetailsComponent implements OnInit {
  detailedContact : Contact;

  constructor(private contactsService: ContactService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    console.log('id: ' + id);
    this.contactsService.getContact(id).subscribe(contact => this.detailedContact = contact);
  }

}
