import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Contact} from "../contact";
import {ContactService} from "../contact.service";
@Component({
  selector: 'contact-form',
  templateUrl: 'contact-form.component.html'
})
export class ContactFormComponent {
  constructor(private contactService: ContactService) { }

  contact = new Contact('', '', '');
  submitted = false;
  @Output() contactAdded = new EventEmitter();

  onSubmit() {
    this.submitted = true;
    this.contactService.addContact(this.contact).subscribe(
      result => this.contactAdded.emit()
    );
  }
}
