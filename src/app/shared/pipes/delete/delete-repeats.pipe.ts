import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteRepeats'
})
export class DeleteRepeatsPipe implements PipeTransform {

  transform(products: any, ...args: any[]): any {
    return ([...new Set(products)]);
  }

}
/* El objeto Set permite almacenar
valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
 */
