import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Swiper } from 'swiper';
import { Movie } from 'src/app/interfaces/cartelera';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];
  public mySwiper!: Swiper;

  constructor() {
    this.movies = [];
  }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });
  }

  ngOnInit(): void {

  }

  onSlidePrev(){
    this.mySwiper.slidePrev()
  }
  onSlideNext(){
    this.mySwiper.slideNext()
  }
}
