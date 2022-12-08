import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ContactListComponent },
      { path: 'editar/:id', component: ContactEditComponent },
      { path: 'criar', component: ContactCreateComponent },
      { path: 'deletar/:id', component: ContactDeleteComponent },
    ]),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ContactEditComponent,
    ContactListComponent,
    ContactCreateComponent,
    ContactDeleteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
