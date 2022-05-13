import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout/layout.module';
import { TranslateModule } from '@ngx-translate/core';
import { FilterService } from './services/filter/filter.service';
import { ProductService } from './services/product/product.service';
import { DataService } from './services/data/data.service';
import { CardService } from './services/card/card.service';
import { CardComponent } from './pages/card/card.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';





@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    NzTableModule,
    NzEmptyModule,
    NzDividerModule,
    TranslateModule.forRoot()
  ],
  providers: [FilterService,ProductService,DataService,CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
