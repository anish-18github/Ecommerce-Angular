import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainCarouselComponent,
    HomeProductCardComponent,
    ProductSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
