import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-main',
  templateUrl: './slider-main.component.html',
  styleUrls: ['./slider-main.component.css']
})
export class SliderMainComponent implements OnInit {

  images = [
    "https://i.pinimg.com/originals/80/c5/94/80c594dc0a100326a1e5d94699304a5f.jpg",
    "https://wallpapercave.com/wp/fEaDSdZ.jpg",
    "https://images6.alphacoders.com/879/879076.jpg"
  ];
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
