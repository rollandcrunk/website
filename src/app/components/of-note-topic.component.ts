import { ViewEncapsulation, Component, Renderer } from '@angular/core';

import { MemoirService } from '../services';
import { CarouselMedia } from './carousel.component';
import { AnalyticsService } from '../services/analytics.service';

const expandedClassName = 'rc-expanded';

@Component({
  selector: 'rc-of-note-topic',
  templateUrl: './html/of-note-topic.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class OfNoteTopicComponent {
  private currentTitle: string = null;
  private selectedNote: HTMLLIElement = null;

  constructor(private memoirService: MemoirService,
              private renderer: Renderer,
              private analyticsService: AnalyticsService) {}

  memoir(title: string): CarouselMedia[] {
    return this.memoirService.getMemoir(title);
  }

  expand(event: any, title = 'untitled'): void {
    if (event.target instanceof HTMLLIElement) {
      let noteItem = event.target;
      let oldNoteItem = this.selectedNote;

      if (oldNoteItem) {
        if (this.currentTitle)
          this.analyticsService.topicEvent(this.currentTitle, false);
        this.renderer.setElementClass(this.selectedNote, expandedClassName, false);
      }
      if (noteItem !== oldNoteItem) {
        this.scrollTo(noteItem);
        this.selectedNote = event.target;
        this.currentTitle = title;
        this.analyticsService.topicEvent(title, true);
        this.renderer.setElementClass(this.selectedNote, expandedClassName, true);
      }
      else this.selectedNote = null;
    }
  }

  private scrollTo = (item: HTMLElement): void => {
    item.scrollIntoView(true);
    // @fixme: use style config.
    window.scrollBy(0, -87);
  };
}
