import { Injectable } from '@angular/core';
/* Principios reactivos */
import { BehaviorSubject } from 'rxjs';
import {Product} from '../../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  /* Cúal es la forma correcta de crear un Observable para manejar valores y comunicarlos a través de un servicio */
  private cart = new BehaviorSubject<Product[]>([]);

  /* Publica puede ser usada por cualquier componente */
  cart$ = this.cart.asObservable();
  constructor() { }

  addCart(product: Product) {
    /* Cremos nuevo estado de products para no tener inmutabilidad */
    this.products = [...this.products, product];
    /* Notificamos que hubo un cambio a todos los componentes que estan observando cart$  */
    this.cart.next(this.products);
  }
  deleteCart(product: Product) {
    /* Cremos nuevo estado de products para no tener inmutabilidad */
    const pos = this.products.map(item => item.id).indexOf(product.id);
    const idx = this.products.indexOf(product);
    console.log(this.products, pos, product);
    this.products  =  this.products.splice(idx, 1);

    /* Notificamos que hubo un cambio a todos los componentes que estan observando cart$  */
    this.cart.next(this.products);
  }
}
