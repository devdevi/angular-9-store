import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = []
  API : string =  environment.url_api;

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
  postProduct(product: Product) {
    return this.http.post(this.API, product).subscribe(res => console.log(res))
  }
  updateProduct(id: string, changes: Partial<Product>) {
      return this.http.put<Product>(`${this.API}/${id}`, changes);
    }
  deleteProduct(id: string) {
      return this.http.delete(`${this.API}/${id}`);
    }
}
