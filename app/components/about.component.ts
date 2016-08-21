import {Component, ChangeDetectorRef, AfterViewInit, Renderer, ViewEncapsulation} from "@angular/core";

import {ActivatedRoute} from "@angular/router";

import {PageAnimation} from "./shared/page.animation";
import {MemoirService} from "../services/memoir.service";
import {CarouselComponent, CarouselMedia} from "./carousel.component";
import {TimelineComponent} from "./timeline.component";
import {OfNoteTopic} from "./of-note-topic.component";

const expandedClassName = 'rc-expanded';

@Component({
  selector: 'rc-about',
  templateUrl: 'app/components/about.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.FADE_IN_ANIMATION,
  providers: [MemoirService],
  directives: [CarouselComponent, TimelineComponent]
})
export class AboutComponent implements AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;
  private selectedNote: HTMLLIElement = null;

  constructor(private memoirService: MemoirService,
              private route: ActivatedRoute,
              private renderer: Renderer,
              private changeDetector: ChangeDetectorRef) {}

  // @fixme - better technique for dom access and manipulation.
  ngAfterViewInit(): any {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        let anchor = document.getElementById(id);
        if (anchor) {
          document.body.scrollTop = anchor.offsetTop - 87;
          this.state = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;
          this.changeDetector.detectChanges();
        }
      }
      else document.body.scrollTop = 0;

      this.state = PageAnimation.FADE_IN_ANIMATION_FINAL_STATE;
      this.changeDetector.detectChanges();
    });
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

  memoir(title: string): CarouselMedia[] {
    return this.memoirService.getMemoir(title);
  }

  private scrollTo = (item: HTMLElement): void => {
    item.scrollIntoView(true);
    window.scrollBy(0, -120);
  };
}