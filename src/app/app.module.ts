import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {Routes, RouterModule} from "@angular/router";
import { ContactFormComponent } from './contact-form/contact-form.component';

const appRoutes: Routes = [
  {path: '', component: ContactsComponent},
  {path: 'contact/:id', component: ContactDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailsComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
