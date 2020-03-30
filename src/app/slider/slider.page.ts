import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  items = new Array(5);

  @ViewChild('slider', { static: false }) slides: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  async slideNext() {
    await this.slides.slideNext();
  }

}
