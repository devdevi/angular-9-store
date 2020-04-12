import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: '1',
      image: 'https://i.blogs.es/b6aa6b/playstore/450_1000.jpg',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'https://i.blogs.es/b6aa6b/playstore/450_1000.jpg',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'https://i.blogs.es/b6aa6b/playstore/450_1000.jpg',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'https://i.blogs.es/b6aa6b/playstore/450_1000.jpg',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'https://i.blogs.es/b6aa6b/playstore/450_1000.jpg',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'https://i.blogs.es/b6aa6b/playstore/450_1000.jpg',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }


  clickProduct(id: number) {
    console.log(id);
  }

}
