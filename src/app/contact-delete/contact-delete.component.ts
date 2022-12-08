import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent {
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const url = 'http://localhost:3000/contacts/' + id;
    this.http.delete(url).subscribe(res => {
    })
    this.router.navigate(['']);
  }
}
