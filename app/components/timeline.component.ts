import {ViewEncapsulation, Component, Input} from "@angular/core";

import {TimelineEventComponent} from "./timeline-event.component";
import {CareerHighlightComponent} from "./career-highlight.component";

@Component({
  selector: 'rc-timeline',
  template: `
    <div class="row">
      <div class="col-lg-12">
        <h4 *ngIf="subject">{{subject}}</h4>
        <ul class="timeline">
          <ng-content></ng-content>
        </ul>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  directives: [TimelineEventComponent, CareerHighlightComponent]
})
export class TimelineComponent {
  @Input() subject: string;
}