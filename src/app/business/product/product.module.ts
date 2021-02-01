import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';




@NgModule({
  declarations: [ProductViewComponent, ProductDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
