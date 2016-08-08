import { provideRouter, RouterConfig } from '@angular/router';

import { WelcomeComponent, AboutComponent, LinksComponent, NotFoundComponent } from "./components";

const routes: RouterConfig = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/:id', component: AboutComponent},
  { path: 'links', component: LinksComponent },
  { path: '**', component: NotFoundComponent }
];

export const rcRouterProviders = [
  provideRouter(routes)
];
