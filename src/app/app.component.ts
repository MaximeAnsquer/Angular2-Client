import { Component } from '@angular/core';
import {ContactsComponent} from "./contacts/contacts.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  entryComponents: [ContactsComponent]
})
export class AppComponent {
  title = "Super application Angular 2";
}
