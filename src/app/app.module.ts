import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageProductListComponent } from './pages/product-list/product-list.component';
import { MainRoutingModule } from './router/main.routing';
import { RouterModule } from '@angular/router';
import { PageMainComponent } from './pages/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    PageProductListComponent,
    PageMainComponent
  ],
  imports: [
    
    BrowserModule,
    MainRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
