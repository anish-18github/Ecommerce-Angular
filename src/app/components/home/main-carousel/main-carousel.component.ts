import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { homeCarouselData } from '../../../../Data/mainCarousel';
import { interval, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'], // Fixed typo
})
export class MainCarouselComponent implements OnInit, OnDestroy {
  carouselData: { path: string; image: string }[] = [];
  currentSlide: number = 0;
  autoPlaySubscription!: Subscription;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    this.carouselData = homeCarouselData && homeCarouselData.length > 0 ? homeCarouselData : [];
    this.currentSlide = 0;

    if (isPlatformBrowser(this.platformId)) {
      this.autoPlay();
    }
  }

  autoPlay(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000); // Slides every 2 seconds
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }

  ngOnDestroy(): void {
    // Ensure interval is cleaned up to avoid memory leaks
    if (this.autoPlaySubscription) {
      this.autoPlaySubscription.unsubscribe();
    }
  }
}
