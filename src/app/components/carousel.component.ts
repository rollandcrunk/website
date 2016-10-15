import { Component, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';

import { PageAnimation } from './shared/page.animation';

import {
  SafeHtml,
  SafeResourceUrl,
  DomSanitizer,
} from '@angular/platform-browser';

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
  templateUrl: './html/carousel.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.MEDIA_CHANGE_ANIMATION,
})
export class CarouselComponent {
  private static instance = 0;
  private carouselId = 'rc-carousel-id' + CarouselComponent.instance++;
  private activeIndex = 0;
  private state: string = 'none';

  @Input('media') media: CarouselMedia[] = [];

  constructor(private sanitizer: DomSanitizer,
              private changeDetector: ChangeDetectorRef) {}

  trustHtml = (resource: string): SafeHtml => {
    return this.sanitizer.bypassSecurityTrustHtml(resource);
  };

  trustResource = (resource: string): SafeResourceUrl => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(resource);
  };

  isActive = (index: number, media: CarouselMedia): boolean => {
    return this.activeIndex === index;
  };

  back = (event: Event) => {
    this.state = 'prev';
    this.direct(event, (this.activeIndex === 0) ? this.media.length - 1 : this.activeIndex - 1);
  };

  forward = (event: Event) => {
    this.state = 'next';
    this.direct(event, this.activeIndex + 1);
  };

  direct = (event: Event, index: number) => {
    let fromIndex = this.activeIndex;
    let toIndex = index % this.media.length;

    if (fromIndex !== toIndex) {
      this.changeDetector.detectChanges();
      this.activeIndex = toIndex;
      console.log(this.state);
      if (this.state !== 'prev' && this.state !== 'next') {
        this.state = 'incoming';
        this.changeDetector.detectChanges();
      }
      this.state = 'base';
      this.changeDetector.detectChanges();
    }
    event.stopPropagation();
  };
}
