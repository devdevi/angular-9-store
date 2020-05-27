import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/models/product.model';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  products: Array<Product> = [];
  constructor(
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => this.products = products);
  }
  updateProduct(id: string) {
    const product: Partial<Product> = {

      title: `CAMISETA VUEJS ${Date.now()}`,
      price: 3562552,
      offer: true,
      description: 'Hola compañero que agregaste estas camisas nice',
  };
    this.productsService.updateProduct(id, product).subscribe(data => console.log(data));
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

}
