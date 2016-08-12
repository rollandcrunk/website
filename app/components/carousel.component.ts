import {Component, ViewEncapsulation} from "@angular/core";

import { PageAnimation } from "./shared/page.animation";

export interface CarouselImage {
  url: string;
  title: string;
  description?: string;
}
// <!--, let i = index" class="{{i == 0 ? 'active' : ''}}"-->
@Component({
  selector: 'rc-carousel',
  template: `
    <div class="row">
      <div class="col-lg-6">
        <div id="rc-carousel-id" class="carousel"
             data-keyboard="true" data-ride="carousel" data-interval="0">
          <ol class="carousel-indicators">
            <li *ngFor="let image of images; let i = index;" [class.active]="i == 0"
                 attr.data-slide-to="{{i}}" data-target="#carousel-example-generic">
            </li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div *ngFor="let image of images; let i = index;" class="carousel-item" [class.active]="i == 0">
              <img src="{{image.url}}" alt="{{image.title}}" data-holder-rendered="true">
            </div>
          </div>
          <a class="left carousel-control" href="#rc-carousel-id" role="button" data-slide="prev" (click)="back()">
            <span class="icon-prev" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#rc-carousel-id" role="button" data-slide="next" (click)="forward()">
            <span class="icon-next" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-block">
            <h4 class="card-title">{{images[activeIndex].title}}</h4>
            <p *ngIf="images[activeIndex].description" class="card-text">{{images[activeIndex].description}}</p>
          </div>
        </div>

      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.FADE_IN_ANIMATION
})
export class CarouselComponent {
  private activeIndex = 0;

  private images: CarouselImage[] = [
    { url: 'img/uss-rb-russell.jpg', title: 'USS R.B. Russell; SSN 687',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/nye-manila-trance.jpg', title: 'New Years Eve 2004, Makati Philippines',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/cb750f.jpg', title: '1979 Honda CB-750f',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/nye-manila-trance.jpg', title: 'New Years Eve 2004, Makati Philippines',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/outside-office.jpg', title: 'Simteria Philippines',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/office-window.jpg', title: 'Simteria Philippines',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/inside-office.jpg', title: 'Simteria Philippines',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/racer.jpg', title: '1983 Kawasaki GPz750',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/glorietta.jpg', title: 'Glorietta Mall, Makati Philippines',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
    { url: 'img/pasay-road.jpg', title: 'Pasay Road, Makati Philippines',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},

    { url: 'img/pigs-in-blanket.jpg', title: ', Davao Philippines',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
    `},
  ];

  back() {
    this.activeIndex = (this.activeIndex == 0) ? this.images.length - 1 : this.activeIndex - 1;
  }

  forward() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }
}