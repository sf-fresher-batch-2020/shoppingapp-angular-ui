import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(items: any[], selectedrange: string): any[] {
    console.log('range Pipe:' , selectedrange);

    if(!items) return [];
    if(!selectedrange) return items;
    
    return items.filter( it => {
      return it.productrange == selectedrange;
    });
  }

}
