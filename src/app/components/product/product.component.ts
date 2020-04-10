import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  OnDestroy,
  DoCheck,
  SimpleChanges
} from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  // EVent emitter
  @Output() productClick: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('COnstructor product')
   }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(`${this.product.id} on changes`)
  //   console.log(changes)
  // }
  ngOnInit(): void {
    console.log(`${this.product.id} on Init`)
  }
  ngDoCheck() {
    console.log(`${this.product.id} DoCheck`)
  //   console.log(changes)
  }
  ngOnDestroy() {
    console.log(`${this.product.id} OnDestroy`)
  }

  add() {
    console.log('Add carrito')
    this.productClick.emit(this.product.id)
  }

}
