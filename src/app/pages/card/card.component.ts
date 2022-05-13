import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardProductList:any[] = [];
  overallPrice:number = 0;
  showOverAllPrice:boolean = false;
  constructor(private dataService:DataService) {}

  calculateOverallPrice(){
    this.showOverAllPrice = true;
    this.overallPrice = 0;
    this.cardProductList.forEach(element => {
      this.overallPrice += element.priceAll;
    });
  }

  ngOnInit(): void {
    this.dataService.getCardProducts();
    this.dataService.currentCardProduct.subscribe(data => this.cardProductList = data);
  }


  deleteCardProduct(product:any){
    this.dataService.deleteCardProduct(product);
    this.calculateOverallPrice();
    this.dataService.getCardLength(); 
  }



}
