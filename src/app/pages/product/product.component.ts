import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CardService } from 'src/app/services/card/card.service';
import { DataService } from 'src/app/services/data/data.service';
import { FilterService } from 'src/app/services/filter/filter.service';
import { ProductService } from 'src/app/services/product/product.service';
import { computers,gpus,cpus,ozus,motherboards,monitor,mouse,keyboard,ssd,coolers,others,powers } from 'src/app/shared/fake-data/computers';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList:any;
  value!:number;
  price:number = 50000;

  minPrice:number = 50000;
  maxPrice:number = 25000000;
  productNumber:number = 1;
  isVisible = false;
  alertVisible = false;
  categories:any[] = [];
  productListCopy:any[] = [];
  gathered:any[] = [];

  selectedProduct:any;
  selectedProductPriceCopy:any;


  productPriceCopy:any;

  constructor(
     private filter:FilterService
    ,private dataService:DataService
    ,private translate:TranslateService
    ,private message: NzMessageService
    ,private modal :NzModalService
    ,private cardService:CardService)
    {
    }

    showModal(): void {
      this.isVisible = true;
      this.selectedProductPriceCopy = this.selectedProduct.price;
    }
  


    handleOk(): void {
      this.isVisible = false;
      this.addProductToCard(this.selectedProduct);
      this.createMessage();
      this.productNumber = 1;
      this.alertVisible = true; 
      setTimeout(() => {
        this.alertVisible = false;
      }, 2009);
      this.dataService.getCardLength(); 
    }
  
    handleCancel(): void {
      this.isVisible = false;
      this.productNumber = 1;
    }

  ngOnInit(): void {
    this.dataService.currentGathered.subscribe(gathered => {
      this.gathered = gathered,
      this.productList = this.gathered[0];
      this.productListCopy = this.gathered[1];
      this.categories = this.gathered[2];
    });

  }

  multiply(count:number){
    this.selectedProductPriceCopy = this.selectedProduct.price;
    this.selectedProductPriceCopy *= count;
  }

  addProductToCard(product:any){
      product.count = this.productNumber;
      product.priceAll = this.selectedProductPriceCopy;
      this.cardService.addCardProduct(product);
  }

  filterByCategory(category:any){
    this.productList = this.productListCopy;
    this.productList = this.productList.filter((c:any) => { return c.category == category.id});
  }
  
  getAllProducts(){
    this.productList = this.productListCopy;
  }

  filterIncriment(){
    this.filter.sortByIncrement(this.productList);
  }
    
  filterDecriment(){
    this.filter.sortByDecriment(this.productList);
  }

  filterByPriceInc(price:number){
    this.productList = this.productListCopy;
    this.productList =  this.filter.filterByPriceIncrease(this.productList,price);
  }

  filterByNewProduct(){
    this.productList = this.filter.filterByNewProduct(this.productList);
  }

  getSingleProduct(product:any){
    this.selectedProduct = product;
    this.showModal();
  }

  createMessage(): void {
    this.message.success(this.selectedProduct.name + ' успешно добавлен в корзину');
  }


  


}
