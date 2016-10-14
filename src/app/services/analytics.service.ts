import {Injectable} from "@angular/core";

declare var rc_ga: any;   // google analytics

@Injectable()
export class AnalyticsService {
  private lastPage: string = null;

  constructor() {
    rc_ga('create', 'UA-84129637-1', 'auto');
  }

  public navigateTo(page: string) {
    if (page != this.lastPage) {
      this.lastPage = page;
      console.debug('navigateTo(' + page + ')');
      rc_ga('send', 'pageview', page);
    }
  }
}