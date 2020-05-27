import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns: string[] = ['img', 'title', 'price', 'cant', 'actions'];

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
   }

  ngOnInit(): void {
  }
  addProduct(product: Product) {
    this.cartService.addCart(product);
  }
  deleteProduct(product: Product) {
    this.cartService.deleteCart(product);
  }

}
