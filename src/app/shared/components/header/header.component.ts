import { Component, OnInit } from '@angular/core';
/* Pipes */
import { map } from 'rxjs/operators';

import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /*  total: Number = 0; */
  /* Observable */
  total$: Observable<number>
  constructor(
    private cartService: CartService,
  ) {
    /* this.cartService.cart$.subscribe(products => {
      console.log(products)
      this.total = products.length;
    }) */
    /* Mejor Practica */
    /*     this.cartService.cart$
          .pipe(
            map(products => this.total = products.length)
          )
          .subscribe(total => this.total = total)
       } */
    /* Mas Elegante */
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length)
      )
  }

  ngOnInit(): void {
  }

}
