import { Component } from '@angular/core';
import { MainCarouselComponent } from "./main-carousel/main-carousel.component";
import { menJeans } from '../../../Data/Men/Men_jeans';
import { gounsPage1 } from '../../../Data/Gouns/gouns';
import { lehngacholiPage2 } from '../../../Data/Saree/lenghaCholiPage2';
import { kurtaPage1 } from '../../../Data/Kurta/kurta';
import { mensShoesPage1 } from '../../../Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menJeans: any
  womenGouns: any
  lehangaCholi: any
  mensKurta: any
  mensShoes: any

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 5)
    this.womenGouns = gounsPage1.slice(0, 5)
    this.lehangaCholi = lehngacholiPage2.slice(0, 5)
    this.mensKurta = kurtaPage1.slice(0, 5)
    this.mensShoes = mensShoesPage1.slice(0, 5)
  }
}
