import { Component } from "@angular/core";
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES } from "@angular/router";

import { rcRouterProviders } from './routes';
import {
  NavbarComponent,
  FooterComponent,
  WelcomeComponent,
  AboutComponent,
  LinksComponent,
  NotFoundComponent
} from "./components";

@Component({
  selector: 'rc-main',
  template: `
    <rc-navbar></rc-navbar>
    <router-outlet></router-outlet>
    <rc-footer></rc-footer>
  `,
  directives: [ NavbarComponent, FooterComponent, ROUTER_DIRECTIVES],
  precompile: [ WelcomeComponent, AboutComponent, LinksComponent, NotFoundComponent ]
})
export class MainComponent {
}

bootstrap(MainComponent, [ rcRouterProviders ]).catch(err => console.error(err));
