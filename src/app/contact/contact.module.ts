import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';




@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
  ]
})
export class ContactModule { }
