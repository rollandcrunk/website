import {ViewEncapsulation, Component, Input} from "@angular/core";

@Component({
  selector: 'rc-timeline-event',
  template: `
    <li [class.timeline-inverted]="inverted">
      <div class="timeline-badge {{badge}}"><i class="glyphicon glyphicon-check"></i></div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h5 *ngIf="title" class="timeline-title">{{title}}</h5>
          <p *ngIf="timeframe"><small class="text-muted"><i class="glyphicon glyphicon-time"></i>{{timeframe}}</small></p>
        </div>
        <div class="timeline-body">
          <ng-content></ng-content>
        </div>
      </div>
    </li>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class TimelineEventComponent {
  @Input() title: string;
  @Input() timeframe: string;
  @Input() inverted: string;
  @Input() badge: string = '';
}