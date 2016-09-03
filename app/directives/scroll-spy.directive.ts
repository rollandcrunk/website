import {Directive, HostListener, ElementRef, Input, AfterViewInit} from "@angular/core";

import {PlaceChangeEvent} from "../event/place-change.event";
import {StyleConfig} from "../style.config";

class Place {
  id: string;
  top: number;
  bottom: number;
}

@Directive({ selector: '[rc-scroll-spy]' })
export class ScrollSpy implements AfterViewInit {
  private scrollSlop = 10;
  private fixedArtifactsTop = 0;
  private places: Place[] = [];

  @Input('rc-scroll-spy') selector: string;

  constructor(styleConfig: StyleConfig,
              private elementRef: ElementRef,
              private placeChangeEvent: PlaceChangeEvent) {
    this.fixedArtifactsTop = styleConfig.fixedArtifactsTop;
  }

  ngAfterViewInit() {
    this.catalog(this.selector);
  }

  @HostListener('window:scroll', [])
  onScroll() {
    let top = document.body.scrollTop;

    let places = this.pseudoPlaces().concat(this.findAll().map((place) => place.id));
    if (places) {
      this.placeChangeEvent.emit(places);
      console.log("top: " + top + ", yields: " + JSON.stringify(places));
    }
  }

  private catalog = (className: string) => {
    let places: HTMLElement[] = this.elementRef.nativeElement.getElementsByClassName(className);
    for (let i = 0; i < places.length; ++i) {
      let topic: HTMLElement = places[i];
      if (topic.id) {
        this.places.push(this.placeFromElement(topic));
        console.log("cataloging: " + JSON.stringify(this.places[i]));
      }
    }
  };

  private placeFromElement = (element: HTMLElement) => {
    return {
      id: element.id,
      top: element.offsetTop - this.fixedArtifactsTop * 2,
      bottom: element.offsetTop + element.clientHeight - this.fixedArtifactsTop * 2
    }
  }

  private locationPredicate= (place: Place) => {
    let top = document.body.scrollTop;
    return place.top < top && place.bottom > top;
  };

  // @nb: potential duplicate at end of scroll
  private findAll = (): Place[] => {
    let result: Place[] = [];

    let places = this.places;
    for (let i in places)
      if (this.locationPredicate(places[i])) result.push(places[i]);

    // if scrolled to end, include the last place
    if ((document.body.scrollHeight - window.innerHeight) == window.pageYOffset) {
      // @nb: may be adding it twice here; considered benign.
      if (places.length) result.push(places[places.length - 1]);
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
}