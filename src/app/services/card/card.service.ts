import { Injectable, OnInit } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CardService   {


  cardList:any[] = [];
  

  constructor() {
  }

  
  getCardProductList(){
    return this.cardList;
  }

  getCardLength(): number{
    return this.cardList.length;
  }

  
  addCardProduct(product:any){
    this.cardList.push(product);
  }
  

  deleteCardProduct(product:any){
    this.cardList.forEach((value,index)=>{
      if(value==product) this.cardList.splice(index,1);
    });
  }




  



}
