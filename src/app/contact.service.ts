import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Contact} from "./contact";

@Injectable()
export class ContactService {
  constructor(private http: Http) { }

  getContacts() {
    return this.http.get('http://localhost:3000/contacts').map(res => res.json() as Contact[]);
  }


}
