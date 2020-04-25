import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RepeatNumberPipe } from './pipes/repeat/repeat-number.pipe';
import { DeleteRepeatsPipe } from './pipes/delete/delete-repeats.pipe';



@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    RepeatNumberPipe,
    DeleteRepeatsPipe,
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    RepeatNumberPipe,
    DeleteRepeatsPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
