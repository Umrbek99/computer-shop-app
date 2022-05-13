import { Injectable, OnInit } from '@angular/core';
import {
  CaseCategory,
  GpuCategory,
  CpuCategory,
  MotehrBoardCategory,
  CoolerCategory,
  PowerCategory,
  SsdCategory,
  MonitorCategory,
  KeyboardCategry,
  MouseCategory,
  OthersCategory,
  OzuCategory,} from '../../shared/fake-data/categories';
import { computers,gpus,cpus,ozus,motherboards,monitor,mouse,keyboard,ssd,coolers,others,powers } from 'src/app/shared/fake-data/computers';

interface categories{
  id:number,
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit {

  constructor() { }

  gathered:any[] = [];
  categories:categories[]  = [];
  productList:any[] = [];
  productListCopy:any[] = [];

  ngOnInit(): void {
    this.gathered = this.findProductsByCategory(12,this.productList,this.productListCopy,this.categories);
  }

  getGatheredById(id:number){
    return this.findProductsByCategory(id,this.productList,this.productListCopy,this.categories)
  }

  findProductsByCategory(product:number,categories:any,productList:any[],productListCopy:any[]){
    switch(product) { 
      case 1: { 
        this.gathered = [];
        productList = gpus;
        productListCopy = gpus;
        categories = this.findAllCategoriesGyProduct(product);
        this.gathered.push(productList,productList,categories);
         break; 
      }
      case 2: {
         this.gathered = [];
         productList = cpus;
         productListCopy = cpus; 
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      }
      case 3: {
        this.gathered = [];
         productList = motherboards;
         productListCopy =  motherboards;
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      }
      case 4: {
        this.gathered = [];
         productList = ozus;
         productListCopy = ozus; 
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      }
      case 5: {
        this.gathered = [];
         productList = coolers;
         productListCopy =  coolers;
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      }
      case 6: {
        this.gathered = [];
         productList = powers;
         productListCopy =  powers;
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      }
      case 7: {
        this.gathered = [];
         productList = ssd;
         productListCopy =ssd;  
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      }
      case 8: {
        this.gathered = [];
         productList = monitor;
         productListCopy =  monitor;
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      }
      case 9: {
        this.gathered = [];
         productList = keyboard;
         productListCopy =  keyboard;
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      }
      case 10: {
        this.gathered = [];
         productList = mouse;
         productListCopy =  mouse;
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      } 
      case 11: {
        this.gathered = [];
        productList = others;
        productListCopy =  others;
        categories = this.findAllCategoriesGyProduct(product);
        this.gathered.push(productList,productList,categories);
        break; 
      }
      case 12: {
        this.gathered = [];
        productList = computers;
        productListCopy =  computers;
        categories = this.findAllCategoriesGyProduct(product);
        this.gathered.push(productList,productList,categories);
        break; 
      } 
      default: { 
        this.gathered = [];
         productList = computers;
         categories = this.findAllCategoriesGyProduct(product);
         this.gathered.push(productList,productList,categories);
         break; 
      } 
   } 
   return this.gathered;


  }


  findAllCategoriesGyProduct(id:number){
    let categories;
    if(id == 1){
      categories = GpuCategory;
    }
    if(id == 2){
      categories = CpuCategory;
    }
    if(id == 3){
      categories = MotehrBoardCategory;
    }
    if(id == 4){
      categories = OzuCategory;
    }
    if(id == 5){
      categories = CoolerCategory;
    }
    if(id == 6){
      categories = PowerCategory;
    }
    if(id == 7){
      categories = SsdCategory;
    }
    if(id == 8){
      categories = MonitorCategory;
    }
    if(id == 9){
      categories = KeyboardCategry;
    }
    if(id == 10){
      categories = MouseCategory;
    }
    if(id == 11){
      categories = OthersCategory;
    }
    if(id == 12){
      categories = CaseCategory;
    }
    return categories;
  }



  getGathered(){
    return this.gathered;
  }








}
