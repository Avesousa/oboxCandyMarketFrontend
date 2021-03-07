import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {}

  
}
