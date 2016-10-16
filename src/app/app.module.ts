import {NgModule} from '@angular/core/';
import {BrowserModule} from '@angular/platform-browser';

import {routing} from './routes';

import {
  MainComponent,
  LogoComponent,
  OpinionTopicComponent,
  WorkTopicComponent,
  GalleryTopicComponent,
  OfNoteTopicComponent,
  CarouselComponent,
  LinksComponent,
  AboutComponent,
  WelcomeComponent,
  TimelineEventComponent,
  CareerHighlightComponent,
  TimelineComponent,
  TrustedContentComponent,
  NotFoundComponent,
  PageComponent,
  NavbarComponent
} from './components';

import { LinkForDirective, ScrollSpyDirective, ClickAuditDirective}  from './directives';

import {PlaceChangeEvent} from './event/place-change.event';
import {StyleConfig} from './style.config';
import {AnalyticsService} from './services/analytics.service';
import {FooterComponent} from './components/footer.component';

@NgModule({
  imports:  [
    BrowserModule,
    routing
  ],
  declarations: [
    MainComponent,
    LogoComponent,
    LinkForDirective,
    ClickAuditDirective,
    OfNoteTopicComponent,
    GalleryTopicComponent,
    WorkTopicComponent,
    OpinionTopicComponent,
    CarouselComponent,
    ScrollSpyDirective,
    WelcomeComponent,
    AboutComponent,
    LinksComponent,
    TimelineEventComponent,
    CareerHighlightComponent,
    TimelineComponent,
    TrustedContentComponent,
    NotFoundComponent,
    PageComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: [
    Location,
    AnalyticsService,
    StyleConfig,
    PlaceChangeEvent
  ],
  bootstrap: [ MainComponent ]
})
export class AppModule {}
