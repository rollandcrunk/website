import { Injectable } from '@angular/core';

declare var rc_ga: any;   // google analytics

@Injectable()
export class AnalyticsService {
  private lastPage: string = null;
  private lastLocation: string = null;

  constructor() {
    rc_ga('create', 'UA-84129637-1', 'auto');
  }

  public navigateTo = (page: string) => {
    if (page !== this.lastPage) {
      this.lastPage = page;
      rc_ga('send', 'pageview', page);
    }
  };

  public scrollEvent = (location: string) => {
    if (location !== this.lastLocation) {
      this.lastLocation = location;
      rc_ga('send', 'event', 'scroll', location);
    }
  };

  public topicEvent = (title: string, open: boolean) => {
    let action = open ? 'open' : ' close';
    rc_ga('send', 'event', 'topic', action, title);
  }

  public carouselEvent = (title: string, fromIndex: number, toIndex: number) => {
    let action = '' + fromIndex + '->' + toIndex;
    rc_ga('send', 'event', 'carousel', action, title);
  };

  public timelineEvent = (title: string, tab: string) => {
    rc_ga('send', 'event', 'timeline', 'tab', title + ':' + tab);
  };

  public clickAuditEvent = (url: string) => {
    rc_ga('send', 'event', 'link', 'click', url);
  };
}
