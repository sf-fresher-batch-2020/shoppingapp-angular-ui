import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categories'
})
export class CategoriesPipe implements PipeTransform {

  transform(items: any[], selectedcategories: string): any[] {
    console.log('Transaction Type Pipe:' , selectedcategories);

    if(!items) return [];
    if(!selectedcategories ) return items;
    
    return items.filter( it => {
    //return selectedcategories.includes(it.category);
    return it.category == selectedcategories;
    });
  }

}
