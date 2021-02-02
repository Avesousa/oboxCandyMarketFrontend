import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).ready(function() {
      $('#autoWidth').lightSlider({
          autoWidth:true,
          loop:true,
          onSliderLoad: function() {
              $('#autoWidth').removeClass('cS-hidden');
          } 
      });  
    });
  }

  
}
