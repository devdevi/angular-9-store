import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Product } from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  // EVent emitter
  @Output() productClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  add() {
    console.log('Add carrito')
    this.productClick.emit(this.product.id)
  }

}
