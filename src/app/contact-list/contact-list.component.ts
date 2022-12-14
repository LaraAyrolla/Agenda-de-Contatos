import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: any;
  url: any;
  constructor(@Inject(DOCUMENT) document: Document, private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/contacts').subscribe(res => {
      this.contacts = res
    })
  }
  filterContacts(){
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const phone = (<HTMLInputElement>document.getElementById("phone")).value
    const email = (<HTMLInputElement>document.getElementById("email")).value
    const company = (<HTMLInputElement>document.getElementById("company")).value
    const url = 'http://localhost:3000/contacts?name_like=' + name + '&phone_like=' + phone
      + '&email_like=' + email + '&company_like=' + company;
    this.http.get(url).subscribe(res => {
      this.contacts = res
    })
  }
  filterContactsExact(){
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const phone = (<HTMLInputElement>document.getElementById("phone")).value
    const email = (<HTMLInputElement>document.getElementById("email")).value
    const company = (<HTMLInputElement>document.getElementById("company")).value
    this.url = 'http://localhost:3000/contacts?';
    if (name!=null && name!='')
      this.url+= 'name=' + name + '&';
    if (phone!=null && phone!='')
      this.url+= 'phone=' + phone + '&';
    if (email!=null && email!='')
      this.url+= 'email=' + email + '&';
    if (company!=null && company!='')
      this.url+= 'company=' + company;
    this.http.get(this.url).subscribe(res => {
      this.contacts = res
    })
  }
}
