import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  images: string[] = [
    'assets/images/banner-1.jpg',
    'assets/images/banner-2.jpg',
    'assets/images/banner-3.jpg',
  ];
  mySwiper: Swiper;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.mySwiper = new Swiper(".swiper-container", {
      // navigation: {
      //   nextEl: “.swiper - button - next”,
      //   prevEl: “.swiper - button - prev”
      // }
    });
  }

}
