import { provideRouter, RouterConfig } from '@angular/router';

import { WelcomeComponent, AboutComponent, LinksComponent, NotFoundComponent } from "./components";
import {PageComponent} from "./components/page.component";

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: ':id', component: PageComponent },
  { path: 'about/:id', component: PageComponent },
  { path: '**', component: NotFoundComponent }
];

export const rcRouterProviders = [
  provideRouter(routes)
];
