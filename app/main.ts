import {Component} from "@angular/core";
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Location} from "@angular/common";
import {ROUTER_DIRECTIVES} from "@angular/router";


import {rcRouterProviders} from './routes';
import {StyleConfig} from "./style.config";

import {
  NavbarComponent,
  PageComponent,
  FooterComponent,
  WelcomeComponent,
  AboutComponent,
  LinksComponent,
  NotFoundComponent,
} from "./components";

import {PlaceChangeEvent} from "./event/place-change.event";
import {AnalyticsService} from "./services/analytics.service";

@Component({
  selector: 'rc-main',
  template: `
    <div>
      <rc-navbar></rc-navbar>
      <router-outlet></router-outlet>
      <rc-footer></rc-footer>
    </div>
  `,
  providers: [Location, AnalyticsService, StyleConfig, PlaceChangeEvent],
  directives: [
    NavbarComponent,
    FooterComponent,
    ROUTER_DIRECTIVES
  ],
  precompile: [
    PageComponent,
    WelcomeComponent,
    AboutComponent,
    LinksComponent,
    NotFoundComponent
  ]
})
export class MainComponent {
}

bootstrap(MainComponent, [ rcRouterProviders ]).catch(err => console.error(err));
