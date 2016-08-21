import {Component, ChangeDetectorRef, AfterViewInit, ViewEncapsulation} from "@angular/core";

import {ActivatedRoute} from "@angular/router";
import {PageAnimation} from "./shared/page.animation";
import {MemoirService} from "../services/memoir.service";
import {OfNoteTopicComponent} from "./of-note-topic.component";
import {GalleryTopicComponent} from "./gallery-topic.component";
import {WorkTopicComponent} from "./work-topic.component";
import {OpinionTopicComponent} from "./opinion-topic.component";


@Component({
  selector: 'rc-about',
  templateUrl: 'app/components/html/about.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.FADE_IN_ANIMATION,
  providers: [MemoirService],
  directives: [OfNoteTopicComponent, GalleryTopicComponent, WorkTopicComponent, OpinionTopicComponent]
})
export class AboutComponent implements AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;

  constructor(private route: ActivatedRoute,
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
}