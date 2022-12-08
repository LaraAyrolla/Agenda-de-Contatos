import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent {
  constructor(@Inject(DOCUMENT) document: Document, private router: Router, private http: HttpClient) {}
  saveContact(): void {
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const phone = (<HTMLInputElement>document.getElementById("phone")).value
    const email = (<HTMLInputElement>document.getElementById("email")).value
    const company = (<HTMLInputElement>document.getElementById("company")).value
    const body = {'name': name, 'phone': phone, 'email': email, 'company': company};
    this.http.post('http://localhost:3000/contacts/', body).subscribe(res => {
    })
    this.router.navigate(['']);
  }
}
