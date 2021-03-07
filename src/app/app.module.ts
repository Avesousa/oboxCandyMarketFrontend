import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageProductListComponent } from './pages/product-list/product-list.component';
import { MainRoutingModule } from './router/main.routing';
import { RouterModule } from '@angular/router';
import { PageMainComponent } from './pages/main/main.component';
import { ProductModule } from './business/product/product.module';
import { HeaderComponent } from './layout/header/header.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Material UI
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 

//AwesomeFonts icons

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//bootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BrandComponent } from './layout/brand/brand.component';
import { SliderMainComponent } from './layout/slider-main/slider-main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SubscriptionComponent } from './layout/subscription/subscription.component';





@NgModule({
  declarations: [
    AppComponent,
    PageProductListComponent,
    PageMainComponent,
    HeaderComponent,
    TopbarComponent,
    NavbarComponent,
    BrandComponent,
    SliderMainComponent,
    FooterComponent,
    SubscriptionComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    MainRoutingModule,
    RouterModule,
    FontAwesomeModule,
    ProductModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
