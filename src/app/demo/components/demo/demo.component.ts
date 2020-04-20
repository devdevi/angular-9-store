import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';
  power = 20;
  input = '';
  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];


  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line: comment-format
    //Buena practica para llamada de datos en dicho componente
  }


  addItem() {
    this.array.push(this.title);
  }
  deleteItem(index: number) {
    this.array.splice(index, 1);
  }
}
