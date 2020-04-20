import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }


  clickProduct(id: number) {
    console.log(id);
  }

}