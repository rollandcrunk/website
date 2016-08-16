import {Component, ViewEncapsulation, OnInit, Input} from "@angular/core";

import { PageAnimation } from "./shared/page.animation";

import {
  SafeHtml,
  SafeResourceUrl,
  DomSanitizationService,
  BROWSER_SANITIZATION_PROVIDERS
} from "@angular/platform-browser";
import {SEARS_POINT_LAP} from "./shared/iframe.source";

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
            <div *ngFor="let item of media; let i = index;" class="carousel-item" [class.active]="i == 0">
              <img *ngIf="item.media == 'image'" src="{{item.src}}" alt="{{item.title}}" data-holder-rendered="true">
              <iframe *ngIf="item.media == 'iframe'" [src]="trustResource(item.src)" name="{{item.title}}" 
                      height="289" width="440"
                      frameborder="0" style="border:0" data-holder-rendered="true"></iframe>
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
        <div *ngIf="media.length > 0" class="card">
          <div class="card-block">
            <h4 class="card-title">{{media[activeIndex].title}}</h4>
            <p *ngIf="media[activeIndex].description" class="card-text">
              <span [innerHtml]="trustHtml(media[activeIndex].description)"></span>
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

  @Input('media')
  media: CarouselMedia[] = [];

  constructor(private sanitizer: DomSanitizationService) {}

  ngOnInit(): any {
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
    this.activeIndex = (this.activeIndex == 0) ? this.media.length - 1 : this.activeIndex - 1;
  }

  forward() {
    this.activeIndex = (this.activeIndex + 1) % this.media.length;
  }
}