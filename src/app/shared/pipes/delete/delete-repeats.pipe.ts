import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteRepeats'
})
export class DeleteRepeatsPipe implements PipeTransform {

  transform(products: any, ...args: any[]): any {
    return ([...new Set(products)]);
  }

}
/* El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.

Sintaxis



Parámetros
iterable
Si un objeto iterable es pasado, todos sus elementos serán añadidos al nuevo Set. Si no se especifica este parámetro, o si su valor es null, el nuevo Set estará vacío.
Valor retornado
Una nueva instancia de Set.

Descripción
Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción. Un valor en un Set sólo puede estar una vez; éste es único en la colección Set.*/
