import { provideRouter, RouterConfig } from '@angular/router';

import {PageComponent, NotFoundComponent} from "./components";

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: ':id', component: PageComponent },
  { path: 'about/:id', component: PageComponent },
  { path: '**', component: NotFoundComponent }
];

export const rcRouterProviders = [
  provideRouter(routes)
];
