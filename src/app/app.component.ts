import { Component } from '@angular/core';

import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'platzi-store';
  input = '';
  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];
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

  addItem() {
    this.array.push(this.title)
  }
  deleteItem(index: number) {
    this.array.splice(index, 1)
  }
  clickProduct(id: number) {
    console.log(id)
  }

}
