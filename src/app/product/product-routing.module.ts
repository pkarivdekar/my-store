import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
    {
    path: '', component: ProductListComponent, title: 'My Store | Products'
  },
  {path:':id', component:ProductDetailsComponent, children:[{path:'reviews', component:ReviewsComponent}]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
