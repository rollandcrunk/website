import {provideRouter, RouterConfig} from '@angular/router';

import {WelcomeComponent, AboutComponent, LinksComponent, NotFoundComponent} from "./components";

const routes: RouterConfig = [
  { path: 'home', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'links', component: LinksComponent },
  { path: '**', component: NotFoundComponent }
];

export const rcRouterProviders = [
  provideRouter(routes)
];
