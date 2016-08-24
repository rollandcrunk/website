import {Component, ViewEncapsulation, ChangeDetectorRef, AfterViewInit} from "@angular/core";

import {MemoirService} from "../services/memoir.service";
import {PageAnimation} from "./shared/page.animation";
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

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): any {
    this.state = PageAnimation.FADE_IN_ANIMATION_FINAL_STATE;
    this.changeDetector.detectChanges();
  }
}