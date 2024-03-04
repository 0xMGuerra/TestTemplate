import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  slides = [
    {img: "../assets/books/Constantinopla_Isaac_Asimov.jpg", title: 'Bestseller 1'},
    {img: "../assets/books/El_Hombre_Bicentenario_Isaac_Asimov.jpg", title: 'Bestseller 2'},
    {img: "../assets/books/I_Robot_Isaac_Asimov.jpg", title: 'Bestseller 3'},
    {img: "../assets/books/Triologia_Fundacion_Isaac_Asimov.jpg", title: 'Bestseller 4'}
  ];

  bestsellers = [
    {img: '../assets/books/Constantinopla_Isaac_Asimov.jpg', title: 'Bestseller 1' },
    {img: '../assets/books/El_Hombre_Bicentenario_Isaac_Asimov.jpg', title: 'Bestseller 2' },
    {img: '../assets/books/I_Robot_Isaac_Asimov.jpg', title: 'Bestseller 3' },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: '.arrow-prev',
    nextArrow: '.arrow-next',
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

  private addSlide() {
    this.slides.push({img: "../assets/books/Constantinopla_Isaac_Asimov.jpg", title: "BestSeller 1"})
  }

  private removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  trackByFn(index: number, slide: any) {
    return slide.img;
  }
}
