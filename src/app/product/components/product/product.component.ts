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

import { Product } from '../../../core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  // EVent emitter
  @Output() productClick: EventEmitter<any> = new EventEmitter();
  today = new Date();
  constructor(
    private cartService: CartService
  ) {
    console.log('COnstructor product');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(`${this.product.id} on changes`)
  //   console.log(changes)
  // }
  ngOnInit(): void {
    console.log(`${this.product.id} on Init`);
  }
  ngDoCheck() {
    /*     console.log(`${this.product.id} DoCheck`); */
    //   console.log(changes)
  }
  ngOnDestroy() {
    console.log(`${this.product.id} OnDestroy`);
  }

  addCart() {
    console.log('Add carrito');
   /*  this.productClick.emit(this.product.id); */
    this.cartService.addCart(this.product)
  }

}
