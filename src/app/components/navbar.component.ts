import { Component, ViewChild, ElementRef, Renderer } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

import { PlaceChangeEvent } from '../event/place-change.event';

const menuVisibleClassName = 'in';

const scrollClassName = 'scroll';
const underClassName = 'under';

@Component({
  selector: 'rc-navbar',
  templateUrl: './html/navbar.component.html',
  styles: [`
    .navbar.scroll {
      box-shadow: 0 2px 2px 0 rgba(73,39,74,0.66);
    }
    
    .navbar.scroll.under {
        box-shadow: 0 4px 2px 0 rgba(73,39,74,0.33);
      }
  `],
})
export class NavbarComponent {
  @ViewChild('navbar') navbarElement: ElementRef;
  @ViewChild('menuToggle') menuToggleElement: ElementRef;

  constructor(private router: Router,
              private renderer: Renderer,
              private placeChangeEvent: PlaceChangeEvent) {
    router.events.subscribe((e) => this.handleRouteChange(e));
    placeChangeEvent.subscribe((places) => this.handlePlaceEvent(places));
  }

  private handleRouteChange = (event: Event) => {
    if (event instanceof NavigationStart && this.menuToggleElement) {
      this.renderer.setElementClass(this.menuToggleElement.nativeElement, menuVisibleClassName, false);
    }
  };

  private handlePlaceEvent = (places: string[]) => {
    this.renderer.setElementClass(this.navbarElement.nativeElement, scrollClassName,
      (places.indexOf(this.placeChangeEvent.SCROLL_EVENT) >= 0));
    this.renderer.setElementClass(this.navbarElement.nativeElement, underClassName,
        (places.indexOf(this.placeChangeEvent.UNDER_EVENT) >= 0));
  };
}
