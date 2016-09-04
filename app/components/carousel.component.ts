import {Component, ViewEncapsulation, Input} from "@angular/core";

import {PageAnimation} from "./shared/page.animation";

import {
  SafeHtml,
  SafeResourceUrl,
  DomSanitizationService,
  BROWSER_SANITIZATION_PROVIDERS
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
             data-keyboard="true" data-interval="0">
          <div class="carousel-inner" role="listbox">
            <div *ngFor="let item of media; let i = index;" class="carousel-item" [class.active]="isActive(i)">
              <img *ngIf="item.media == 'image'" src="{{item.src}}" alt="{{item.title}}" data-holder-rendered="true">
              <div *ngIf="item.media == 'iframe'" class="rc-video-clip">
                <iframe  [src]="trustResource(item.src)" name="{{item.title}}" 
                        height="315" width="560"
                        frameborder="0" style="border:0" data-holder-rendered="true"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-control-panel">
          <a *ngIf="media.length > 1" class="left carousel-control" role="button" (click)="back()" data-slide="prev">
            <span class="fa fa-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span> 
          </a>
          <ol *ngIf="media.length > 1" class="carousel-indicators">
            <li *ngFor="let item of media; let i = index;" [class.active]="i == activeIndex"
                 attr.data-slide-to="{{i}}" attr.data-target="{{carouselId}}" (click)="direct(i)"> 
            </li>
          </ol>
          <a *ngIf="media.length > 1" class="right carousel-control" role="button" (click)="forward()"  data-slide="next">
            <span class="fa fa-chevron-right" aria-hidden="true"></span>
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
export class CarouselComponent {
  private static instance = 0;
  private carouselId = "rc-carousel-id" + CarouselComponent.instance++;
  private activeIndex = 0;

  @Input('media') media: CarouselMedia[] = [];

  constructor(private sanitizer: DomSanitizationService) {}

  trustHtml = (resource: string): SafeHtml => {
    return this.sanitizer.bypassSecurityTrustHtml(resource);
  };

  trustResource = (resource: string): SafeResourceUrl => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(resource);
  };

  isActive = (index: number): boolean => {
    return this.activeIndex == index;
  };

  back = () => {
    this.direct((this.activeIndex == 0) ? this.media.length - 1 : this.activeIndex - 1);
  };

  forward = () => {
    this.direct(this.activeIndex + 1);
  };

  direct = (index: number) => {
    this.activeIndex = index % this.media.length;
  };
}