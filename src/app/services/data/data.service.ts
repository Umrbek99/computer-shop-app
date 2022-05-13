import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardService } from '../card/card.service';
import { ProductService } from '../product/product.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  gathered:any[] = [];
  cardListLength:number = 0;
  cardList:any[] = [];


  private gatheredSource = new BehaviorSubject<any[]>(this.gathered);
  currentGathered = this.gatheredSource.asObservable();

  private cardLengthSource = new BehaviorSubject<number>(this.cardListLength);
  currentcardLength = this.cardLengthSource.asObservable();

  private cardProductSource = new BehaviorSubject<any[]>(this.cardList);
  currentCardProduct = this.cardProductSource.asObservable();


  constructor(private productService:ProductService,private cardService:CardService) { 
  }

  getCardProducts(){
    this.cardProductSource.next(this.cardService.getCardProductList());
  }

  getCardLength(){
    this.cardLengthSource.next(this.cardService.getCardLength());
  }

  getGatheredById(id:number){
    this.gatheredSource.next(this.productService.getGatheredById(id)); 
  }

  deleteCardProduct(product:any){
    this.cardService.deleteCardProduct(product);
  }



}
