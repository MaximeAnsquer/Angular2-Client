import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people = [
    { firstName: 'Misko', lastName: 'Hevery', company: 'Google' },
    { firstName: 'Bobby', lastName: 'Stephenson', company: 'Google' }
  ]
}
