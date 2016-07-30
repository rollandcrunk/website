// main entry point
import { bootstrap }          from '@angular/platform-browser-dynamic';
import { MainComponent }       from './components';
import { rcRouterProviders } from './routes';

bootstrap(MainComponent, [
  rcRouterProviders
])
.catch(err => console.error(err));
