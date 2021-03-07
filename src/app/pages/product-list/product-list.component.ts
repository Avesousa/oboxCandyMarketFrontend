import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/business/product/product.model';
declare var $: any;

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class PageProductListComponent implements OnInit {

  constructor() { }
  public products: Product[];

  ngOnInit(): void {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  

    this.products = [
      {
        description:'Los mejores productos de terrabusi',
        name:'Prueba uno jota',
        price: 20.40,
        img:'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/77903860_02.jpg'
      },
      {
        description:'Los mejores productos de terrabusi',
        name:'prueba dos ave',
        price: 20.40,
        img:'https://www.alcodisonline.es/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/1/_/refrescos-coca-cola-lata-dk1-1656.jpg'
      },
      {
        description:'Los mejores productos de terrabusi',
        name:'prueba tres jota matina',
        price: 20.40,
        img:'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/77903860_02.jpg'
      },
      {
        description:'Los mejores productos de terrabusi',
        name:'prueba cuatro',
        price: 20.40,
        img:'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/77903860_02.jpg'
      },
      {
        description:'Los mejores productos de terrabusi',
        name:'Terrabusi',
        price: 20.40,
        img:'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/77903860_02.jpg'
      },
      {
        description:'Los mejores productos de terrabusi',
        name:'Terrabusi',
        price: 20404.49,
        img:'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/77903860_02.jpg'
      },
      {
        description:'Los mejores productos de terrabusi',
        name:'Terrabusi',
        price: 20.40,
        img:'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/77903860_02.jpg'
      },
      {
        description:'Los mejores productos de terrabusi',
        name:'Terrabusi',
        price: 20.40,
        img:'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/77903860_02.jpg'
      },
      {
        description:'Los mejores productos de terrabusi',
        name:'Terrabusi',
        price: 20.40,
        img:'https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/77903860_02.jpg'
      }
    ];
      
  }


}
