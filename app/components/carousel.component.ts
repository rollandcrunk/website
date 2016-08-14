import {Component, ViewEncapsulation, OnInit} from "@angular/core";

import { PageAnimation } from "./shared/page.animation";
import {MC_ROUTE_MAP} from "./shared/iframe.source";
import {
  DomSanitizationService, SafeResourceUrl, BROWSER_SANITIZATION_PROVIDERS,
  SafeHtml,
} from "@angular/platform-browser";

export type MediaType = 'image' | 'iframe';

export interface CarouselMedia {
  src: string;
  media: MediaType;
  title: string;
  description?: string;
  destination?: string;
}
@Component({
  selector: 'rc-carousel',
  template: `
    <div class="row">
      <div class="col-lg-6">
        <div id="{{carouselId}}" class="carousel slide"
             data-keyboard="true" data-ride="carousel" data-interval="0">
          <div class="carousel-inner" role="listbox">
            <div *ngFor="let image of images; let i = index;" class="carousel-item" [class.active]="i == 0">
              <img *ngIf="image.media == 'image'" src="{{image.src}}" alt="{{image.title}}" data-holder-rendered="true">
              <iframe *ngIf="image.media == 'iframe'" [src]="trustResource(image.src)" name="{{image.title}}" 
                      frameborder="0" style="border:0" allowfullscreen data-holder-rendered="true"></iframe>
            </div>
          </div>
          <a class="left carousel-control" href="#{{carouselId}}" role="button" data-slide="prev" (click)="back()">
            <span class="fa fa-chevron-circle-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#{{carouselId}}" role="button" data-slide="next" (click)="forward()">
            <span class="fa fa-chevron-circle-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div class="col-lg-6">
        <div *ngIf="images.length > 0" class="card">
          <div class="card-block">
            <h4 class="card-title">{{images[activeIndex].title}}</h4>
            <p *ngIf="images[activeIndex].description" class="card-text">
              <span [innerHtml]="trustHtml(images[activeIndex].description)"></span>
            </p>
          </div>
        </div>
      </div> 
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.FADE_IN_ANIMATION,
  providers: [DomSanitizationService, BROWSER_SANITIZATION_PROVIDERS]
})
export class CarouselComponent implements OnInit {
  private static instance = 0;
  private carouselId = "rc-carousel-id" + CarouselComponent.instance++;
  private activeIndex = 0;
  private images: CarouselMedia[] = [];

  constructor(private sanitizer: DomSanitizationService) {}

  ngOnInit(): any {
    this.images = [
      {
        src: 'img/uss-rb-russell.jpg', media: 'image', title: 'USS R.B. Russell; SSN 687',
        description: `
          Nuclear fast attack submarine home ported at New London Connecticut.
          Served from February 1977 to December 1979 as a data systems 
          technician (DS2(SS)) responsible for the repair and maintenance of the 
          <a href="https://en.wikipedia.org/wiki/AN/UYK-7" target="_blank">AN/UYK-7</a> central computer complex. 
          International ports of call included 
          <a href="https://en.wikipedia.org/wiki/La_Maddalena" target="_blank">La Maddalena</a> and 
          <a href="https://en.wikipedia.org/wiki/Naples" target="_blank">Naples Italy</a>; 
          <a href="https://en.wikipedia.org/wiki/Submarine_Squadron_14" target="_blank">Holy Loch</a> and 
          <a href="https://en.wikipedia.org/wiki/HMNB_Clyde" target="_blank">Faslane Scotland</a>; 
          <a href="https://en.wikipedia.org/wiki/Trondheim" target="_blank">Trondheim</a> and 
          <a href="https://en.wikipedia.org/wiki/Bergen" target="_blank">Bergen Norway</a>; and, 
          <a href="https://en.wikipedia.org/wiki/Antigua" target="_blank">St. Johns, Antigua</a>.
       `
      },
      {
        src: 'img/cb750f.jpg', media: 'image', title: '1979 Honda CB-750f',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `
      },
      {
        //src: MC_ROUTE_MAP, media: 'iframe', title: 'The Route',
        src: 'img/route.jpg', media: 'image', title: 'The Route',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `,
        destination: 'https://goo.gl/maps/g7shF1uz5sk'
      },
      {
        src: 'img/outside-office.jpg', media: 'image', title: 'Simteria Philippines',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `
      },
      {
        src: 'img/office-window.jpg', media: 'image', title: 'Simteria Philippines',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `
      },
      {
        src: 'img/inside-office.jpg', media: 'image', title: 'Simteria Philippines',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `
      },
      {
        src: 'img/racer.jpg', media: 'image', title: '1983 Kawasaki GPz750',
        description: `
        <a href="https://www.youtube.com/watch?v=WQPevaUvotI" target="_blank">
          Take a lap around Sears Point Raceway.
        </a>
      `
      },
      {
        src: 'img/glorietta.jpg', media: 'image', title: 'Glorietta Mall, Makati Philippines',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `
      },
      {
        src: 'img/nye-manila-trance.jpg', media: 'image', title: 'New Years Eve 2004, Makati Philippines',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `
      },
      {
        src: 'img/pasay-road.jpg', media: 'image', title: 'Pasay Road, Makati Philippines',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `
      },

      {
        src: 'img/pigs-in-blanket.jpg', media: 'image', title: 'Pigs for sale, Davao Philippines',
        description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum gravida mauris, sed iaculis 
        leo rutrum facilisis. Phasellus lacinia hendrerit tortor, ac accumsan quam finibus eu. Aliquam erat volutpat. 
        Maecenas ultricies quam a dui gravida tempus. Ut imperdiet mattis ante id condimentum. Nulla elementum, metus 
        vitae sodales lobortis, justo lorem varius purus, ut efficitur nunc nisi tincidunt erat. Curabitur dignissim 
        metus eu accumsan iaculis.
      `
      },
    ];
  }

  clickDestination(image: CarouselMedia): string {
    return image.destination || '#';
  }

  trustHtml = (resource: string): SafeHtml => {
    return this.sanitizer.bypassSecurityTrustHtml(resource);
  };

  trustResource = (resource: string): SafeResourceUrl => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(resource);
  };

  back() {
    this.activeIndex = (this.activeIndex == 0) ? this.images.length - 1 : this.activeIndex - 1;
  }

  forward() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }
}