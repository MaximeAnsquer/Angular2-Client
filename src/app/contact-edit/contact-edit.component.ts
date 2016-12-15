import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from "../contact";

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  constructor(private cs: ContactService) {}

  @Input() editedContact: Contact;

  onSubmit() {
    this.cs.editContact(this.editedContact._id, this.editedContact).subscribe(
      result => this.cs.contactEditedEvent.emit(null)
    );
  }

  ngOnInit() {
  }

}
