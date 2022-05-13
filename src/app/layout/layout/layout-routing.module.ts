import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/app/pages/card/card.component';
import { ProductComponent } from 'src/app/pages/product/product.component';
import { LayoutComponent } from './layout.component';




const routes:Routes = [
  {path:'',redirectTo:'items',pathMatch:'full'},
  {path:'',component:LayoutComponent,children:[
    {path:'items',component:ProductComponent},
    {path:'card-items',component:CardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }
