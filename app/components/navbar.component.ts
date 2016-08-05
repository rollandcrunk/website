import { Component, ViewChild, ElementRef } from "@angular/core";
import { Router, Event, NavigationStart, ROUTER_DIRECTIVES } from "@angular/router";

import {LogoComponent} from "./logo.component";


@Component({
  selector: 'rc-navbar',
  templateUrl: 'app/components/navbar.component.html',
  directives: [LogoComponent, ROUTER_DIRECTIVES]
})
export class NavbarComponent {
  @ViewChild('menuToggle') navbarElement: ElementRef;

  constructor(private router: Router) {
    router.events.subscribe((e) => this.handleRouteChange(e));
  }

  private handleRouteChange = (event: Event) => {
    if (event instanceof NavigationStart && this.navbarElement) {
      this.navbarElement.nativeElement.className += 'collapse';
    }
  }
}
