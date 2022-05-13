import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

// language list
import { locale as enLang } from "../i18n/vocabs/en";
import { locale as uzLang } from "../i18n/vocabs/uz";
import { locale as ruLang } from "../i18n/vocabs/ru"; 
import { TranslationService } from '../i18n/translation.service';

import { DataService } from 'src/app/services/data/data.service';
import { CardService } from 'src/app/services/card/card.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  languages:string[] = ["ru","uz","en"];
  selectedValue:string ="ru";

  gathered:any[] = [];
  productList:any[] = [];
  productCopy:any[] = [];
  categories:any[] = [];
  value:string = "";

  cardLength:number = 0;


  constructor(private translate:TranslationService,private dataService:DataService,private cardService:CardService,private router:Router){
    // register translations
    this.translate.loadTranslations(
      enLang,
      uzLang,
      ruLang,
    );
    
    this.translate.setLanguage(
      this.translate.getSelectedLanguage()
    );

  }


  // changes language
  changeLanguage(lang:string){
    this.translate.setLanguage(lang);
  }
  
  ngOnInit(): void {
    this.getAllProductsById(12);  
    this.dataService.currentcardLength.subscribe(data => this.cardLength = data);
    this.translate.setLanguage("ru");
  }

  getAllProductsById(id:number){
    this.router.navigateByUrl('items');
    this.dataService.getGatheredById(id);
  }


}
