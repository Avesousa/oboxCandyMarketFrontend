import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageProductListComponent } from './pages/product-list/product-list.component';
import { MainRoutingModule } from './router/main.routing';
import { RouterModule } from '@angular/router';
import { PageMainComponent } from './pages/main/main.component';
import { ProductModule } from './business/product/product.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    PageProductListComponent,
    PageMainComponent
  ],
  imports: [
    BrowserModule,
    MainRoutingModule,
    RouterModule,
    FontAwesomeModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
