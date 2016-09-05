import {ViewEncapsulation, Component, Renderer} from "@angular/core";

import {MemoirService} from "../services";
import {CarouselMedia, CarouselComponent} from "./carousel.component";

const expandedClassName = 'rc-expanded';

@Component({
  selector: 'rc-of-note-topic',
  templateUrl: 'app/components/html/of-note-topic.component.html',
  directives: [OfNoteTopicComponent, CarouselComponent],
  encapsulation: ViewEncapsulation.None,
})
export class OfNoteTopicComponent {
  private selectedNote: HTMLLIElement = null;

  constructor(private memoirService: MemoirService,
              private renderer: Renderer) {}

  memoir(title: string): CarouselMedia[] {
    return this.memoirService.getMemoir(title);
  }

  expand(event: any): void {
    if (event.target instanceof HTMLLIElement) {
      let noteItem = event.target;
      let oldNoteItem = this.selectedNote;

      if (oldNoteItem) {
        this.renderer.setElementClass(this.selectedNote, expandedClassName, false);
      }
      if (noteItem != oldNoteItem) {
        this.scrollTo(noteItem);
        this.selectedNote = event.target;
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