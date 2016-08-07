import { Component, ViewChild, ElementRef, Renderer } from "@angular/core";
import { Router, Event, NavigationStart, ROUTER_DIRECTIVES } from "@angular/router";

import { LogoComponent } from "./logo.component";

const menuVisibleClassName = 'in';

@Component({
  selector: 'rc-navbar',
  templateUrl: 'app/components/navbar.component.html',
  directives: [LogoComponent, ROUTER_DIRECTIVES]
})
export class NavbarComponent {
  @ViewChild('menuToggle') navbarElement: ElementRef;

  constructor(private router: Router,
              private renderer: Renderer) {
    router.events.subscribe((e) => this.handleRouteChange(e));
  }

  private handleRouteChange = (event: Event) => {
    if (event instanceof NavigationStart && this.navbarElement) {
      this.renderer.setElementClass(this.navbarElement.nativeElement, menuVisibleClassName, false);
    }
  }
}
