import {ViewEncapsulation, Component, Input} from "@angular/core";

@Component({
  selector: 'rc-timeline-event',
  template: `
    <li [class.timeline-inverted]="inverted">
      <div class="timeline-badge {{badge}}"><i class="glyphicon glyphicon-check"></i></div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h5 *ngIf="title" class="timeline-title">
            {{title}}
            <small class="text-muted"><i class="fa fa-clock-o"></i> 
              {{timeframe}}
            </small>
          </h5>
        </div>
        <div class="timeline-body">
          <ng-content></ng-content>
        </div>
      </div>
    </li>
  `,
  styles: [`
    h5.timeline-title {
      padding-bottom: .75rem;
    }
    
    h5.timeline-title > small {
      display: block;
      font-size: 60%;
      line-height: 1.5;
    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class TimelineEventComponent {
  @Input() title: string;
  @Input() timeframe: string;
  @Input() inverted: string;
  @Input() badge: string = '';
}