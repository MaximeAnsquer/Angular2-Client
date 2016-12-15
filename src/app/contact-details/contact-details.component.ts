import {Component, OnInit, Input} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  @Input() detailedContact : Contact;

  constructor(private cs: ContactService) { }

  ngOnInit() {
  }

  setDetailedContactNull() {
    this.cs.contactDetailedEvent.emit(null);
  }

}
