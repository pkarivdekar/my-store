import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './product-list/star/star.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    StarComponent,
    ReviewsComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
