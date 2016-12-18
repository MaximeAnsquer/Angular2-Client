import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
@Component({
  selector: 'contact-form',
  templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent {
  constructor(private cs: ContactService) {
  }

  @Input() contact = new Contact('', '', '');

  onSubmit() {
    this.cs.addContact(this.contact).subscribe(
      createdContact => this.cs.contactAddedEvent.emit(createdContact.json() as Contact)
    )
  }

}
