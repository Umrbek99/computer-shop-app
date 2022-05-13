import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }



  sortByIncrement(arr:any[]):any {
    return  arr.sort( (a,b) => { return a.price - b.price});;
  }

  sortByDecriment(arr:any[]){
    return  arr.sort( (a,b) => { return b.price - a.price});;
  }

  filterByPriceIncrease(arr:any[],dollar:number){
    return arr.filter(p => p.price > dollar);
  }

  filterByNewProduct(arr:any[]){
    return arr.filter(p => p.status > 0);
  }
  









}
