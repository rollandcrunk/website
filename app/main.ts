import { Component } from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { rcRouterProviders } from './routes';
import { NavbarComponent } from "./components/navbar.component";

@Component({
  selector: 'rc-main',
  template: `
    <rc-navbar></rc-navbar>
    <router-outlet></router-outlet>
  `,
  directives: [ NavbarComponent, ROUTER_DIRECTIVES]
})
export class MainComponent {
}

bootstrap(MainComponent, [ rcRouterProviders ]).catch(err => console.error(err));
