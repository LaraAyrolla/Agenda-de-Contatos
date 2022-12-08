import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent {
  id= this.route.snapshot.paramMap.get('id');
  name = '';
  phone = '';
  email = '';
  company = '';

  constructor(@Inject(DOCUMENT) document: Document, private route: ActivatedRoute, private router: Router, private http: HttpClient) {}
  
  ngOnInit(): void {;
    const url = 'http://localhost:3000/contacts/' + this.id;
    this.http.get<any>(url).subscribe(res => {
      console.log(res);
      this.name = res.name;
      this.phone = res.phone;
      this.email = res.email
      this.company = res.company;
    })
  }

  saveContact(): void {
    const id = (<HTMLInputElement>document.getElementById("id")).value;
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const phone = (<HTMLInputElement>document.getElementById("phone")).value
    const email = (<HTMLInputElement>document.getElementById("email")).value
    const company = (<HTMLInputElement>document.getElementById("company")).value
    const url = 'http://localhost:3000/contacts/' + id;
    const body = {'name': name, 'phone': phone, 'email': email, 'company': company};
    this.http.patch(url, body).subscribe(res => {
    })
    this.router.navigate(['']);
  }
}
