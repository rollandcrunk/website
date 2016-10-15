import { RouterModule, Routes } from '@angular/router';

import { PageComponent, NotFoundComponent } from './components';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: ':id', component: PageComponent },
  { path: 'about/:id', component: PageComponent },
  { path: '**', component: NotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
