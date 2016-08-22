import {ViewEncapsulation, Component, Input} from "@angular/core";

import {TimelineEventComponent} from "./timeline-event.component";
import {CareerHighlightComponent} from "./career-highlight.component";

@Component({
  selector: 'rc-timeline',
  templateUrl: 'app/components/html/timeline.component.html',
  encapsulation: ViewEncapsulation.None,
  directives: [TimelineEventComponent, CareerHighlightComponent]
})
export class TimelineComponent {
  @Input() subject: string;
}