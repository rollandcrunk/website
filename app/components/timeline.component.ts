import {ViewEncapsulation, Component, Input} from "@angular/core";

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
})
export class TimelineComponent {
  @Input() subject: string;
}