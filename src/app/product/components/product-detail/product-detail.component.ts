import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id)
 
    })
  }
  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      console.log(product)
      this.product = product
    });
  }
  createProduct() {
    const product: Product = {
      id: String(Date.now()),
      title: "Challet",
      description: "Este generador usa un diccionario de palabras en latín para construir pasajes de texto Lorem Ipsum que cumpla con su longitud deseada. La duración y la puntuación dispesar de la oración y el párrafo se calculan usando una distribución Gaussiana, basada en análisis de textos mundiales reales. Esto asegura que el texto Lorem Ipsum generado es único, libre de repeticiones y también se parece a un texto legible todo lo posible.",
      price: 3562552,
      offer: false,
      image: "https://q-cf.bstatic.com/images/hotel/max1024x768/118/118240449.jpg"
  }
    this.productsService.postProduct(product)
  }
  updateProduct(id: string) {
    const product: Partial<Product> = {
     
      title: `CAMISETA VUEJS ${Date.now()}`,
      price: 3562552,
      offer: true,
      description: "Hola compañero que agregaste estas camisas nice",
  }
    this.productsService.updateProduct(id, product).subscribe(product => console.log(product))
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(product => {
      console.log(product)
    });
  }
}
