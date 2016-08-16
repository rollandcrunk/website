import {Component, ChangeDetectorRef, AfterViewInit, Renderer, ViewEncapsulation} from "@angular/core";

import {ActivatedRoute} from "@angular/router";

import {PageAnimation} from "./shared/page.animation";
import {CarouselComponent, CarouselMedia} from "./carousel.component";
import {MemoirService} from "../services/memoir.service";

const expandedClassName = 'rc-expanded';

@Component({
  selector: 'rc-about',
  templateUrl: 'app/components/about.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.FADE_IN_ANIMATION,
  providers: [MemoirService],
  directives: [CarouselComponent]
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
    console.log("expanded: " + event.target);
    if (event.target instanceof HTMLLIElement) {
      let noteItem = event.target;
      let oldNoteItem = this.selectedNote;

      if (oldNoteItem) {
        this.renderer.setElementClass(this.selectedNote, expandedClassName, false);
      }
      if (noteItem != oldNoteItem) {
        this.selectedNote = event.target;
        this.renderer.setElementClass(this.selectedNote, expandedClassName, true);
      }
      else this.selectedNote = noteItem = null;

      this.playMediaAnimation(oldNoteItem, noteItem);
    }
  }

  memoir(title: string): CarouselMedia[] {
    return this.memoirService.getMemoir(title);
  }

  private playMediaAnimation(deactivated: HTMLLIElement, activated: HTMLLIElement) {
    if (deactivated) {
      let carouselElements = deactivated.getElementsByClassName('rc-media');
      if (carouselElements) {
        for (let i = 0; i < carouselElements.length; ++i) {
          this.deactivate(carouselElements[i])
              .then(() => {
                this.setElementClasses(carouselElements[i], false, 'zoomOutLeft', 'animate');
                this.playMediaAnimation(null, activated);
              });
        }
      }
    }

    if (activated) {
      let carouselElements = activated.getElementsByClassName('rc-media');
      if (carouselElements) {
        for (let i = 0; i < carouselElements.length; ++i) {
          this.activate(carouselElements[i])
            .then(() => this.setElementClasses(carouselElements[i], false, 'zoomInRight', 'animate'));
        }
      }
    }
  }

  private deactivate = (element: Element): Promise<any> => {
    this.setElementClasses(element, true, 'zoomOutLeft', 'animate');
    return new Promise((fulfill) => setTimeout(fulfill, 500));
  };

  private activate = (element: Element): Promise<any> => {
    this.setElementClasses(element, true, 'zoomInRight', 'animate');
    return new Promise((fulfill) => setTimeout(fulfill, 500));
  };

  private setElementClasses = (element: Element, state: boolean, ...names: string[]): void => {
    for (let i = 0; i < names.length; ++i) this.renderer.setElementClass(element, names[i], state);
  }
}