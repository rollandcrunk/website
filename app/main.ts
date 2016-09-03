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
import {PageComponent} from "./components/page.component";
import {PlaceChangeEvent} from "./event/place-change.event";

@Component({
  selector: 'rc-main',
  template: `
    <div>
      <rc-navbar></rc-navbar>
      <router-outlet></router-outlet>
      <rc-footer></rc-footer>
    </div>
  `,
  providers: [PlaceChangeEvent],
  directives: [ NavbarComponent, FooterComponent,  ROUTER_DIRECTIVES],
  precompile: [ PageComponent, WelcomeComponent, AboutComponent, LinksComponent, NotFoundComponent ]
})
export class MainComponent {
}

bootstrap(MainComponent, [ rcRouterProviders ]).catch(err => console.error(err));
