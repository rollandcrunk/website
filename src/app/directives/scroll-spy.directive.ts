import { Directive, HostListener, ElementRef, Input, AfterViewInit } from '@angular/core';

import { Location } from '@angular/common';

import { PlaceChangeEvent } from '../event/place-change.event';
import { StyleConfig } from '../style.config';
import { AnalyticsService } from '../services';

class Place {
  id: string;
  top: number;
  bottom: number;
}

@Directive({ selector: '[rcScrollSpy]' })
export class ScrollSpyDirective implements AfterViewInit {
  // some paths that might be constructed that are impossible.
  private static IMPOSSIBLE_PATHS = [ '/gallery/links', '/home/about', '/about/links', '/about/gallery/links' ];

  private scrollSlop = 10;
  private fixedArtifactsTop = 0;
  private lastLocation = '';
  private places: Place[] = [];

  @Input() rcScrollSpy: string;

  constructor(styleConfig: StyleConfig,
              private elementRef: ElementRef,
              private location: Location,
              private placeChangeEvent: PlaceChangeEvent,
              private analyticsService: AnalyticsService) {
    this.fixedArtifactsTop = styleConfig.fixedArtifactsTop;
  }

  ngAfterViewInit() {
    this.catalog(this.rcScrollSpy);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    let placeIds = this.findAll().map((place) => place.id);
    let places = this.pseudoPlaces().concat(placeIds);
    if (places) {
      this.placeChangeEvent.emit(places);
    }
    if (placeIds) this.setLocation(placeIds);
  }

  private setLocation = (places: string[]): string => {
    let unique = places.filter((value: string, index: number, self: string[]) => self.indexOf(value) >= 0);
    let location = '/' + unique.join('/');
    if (this.validLocation(location) && location !== this.lastLocation) {
      this.analyticsService.scrollEvent(location);
      this.lastLocation = location;
      this.location.replaceState(this.lastLocation);
    }
    return location;
  };

  private catalog = (className: string) => {
    let places: HTMLElement[] = this.elementRef.nativeElement.getElementsByClassName(className);
    for (let i = 0; i < places.length; ++i) {
      let topic: HTMLElement = places[i];
      if (topic.id) {
        this.places.push(this.placeFromElement(topic));
      }
    }
  };

  private placeFromElement = (element: HTMLElement) => {
    return {
      id: element.id,
      top: element.offsetTop - this.fixedArtifactsTop * 2,
      bottom: element.offsetTop + element.clientHeight - this.fixedArtifactsTop * 2
    };
  };

  private locationPredicate = (place: Place) => {
    let top = document.body.scrollTop;
    return place.top < top && place.bottom > top;
  };

  private findAll = (): Place[] => {
    let result: Place[] = [];

    let places = this.places;
    for (let i in places)
      if (this.locationPredicate(places[i])) this.addUnique(places[i], result);

    // if scrolled to end, include the last place
    if ((document.body.scrollHeight - window.innerHeight) === window.pageYOffset) {
      if (places.length) {
        this.addUnique(places[places.length - 1], result);
      }
    }
    return result;
  };

  private pseudoPlaces(): string[] {
    let result: string[] = [];
    let top = document.body.scrollTop;

    if (top > this.scrollSlop) result.push(this.placeChangeEvent.SCROLL_EVENT);
    if (top > this.fixedArtifactsTop / 2) result.push(this.placeChangeEvent.UNDER_EVENT);

    return result;
  }

  private addUnique = (place: Place, places: Place[]) => {
    if (places.indexOf(place) < 0) places.push(place);
  };

  private validLocation = (location: string): boolean => {
    return location && ScrollSpyDirective.IMPOSSIBLE_PATHS.indexOf(location) < 0;
  }
}
