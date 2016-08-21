import {ViewEncapsulation, Component} from "@angular/core";

import {MemoirService} from "../services/memoir.service";
import {CarouselMedia} from "./carousel.component";

@Component({
  selector: 'rc-of-note-topic',
  templateUrl: 'app/components/html/of-note-topic.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class OfNoteTopic {
  constructor(private memoirService: MemoirService) {}

  memoir(title: string): CarouselMedia[] {
    return this.memoirService.getMemoir(title);
  }
}