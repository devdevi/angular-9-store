import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = []
  API : string = 'http://platzi-store.herokuapp.com/products';

    constructor(
    /* Dependencias */
    private http: HttpClient

  ) { }
  getAllProducts() {
    return this.http.get<Product[]>(this.API);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`${this.API}/${id}`);
  /*   return this.products.find(item => id === item.id); */
  }
}
