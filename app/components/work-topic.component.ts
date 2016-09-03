import {ViewEncapsulation, Component} from "@angular/core";

import {ExperienceService, Juncture} from "../services";
import {TimelineComponent} from "./timeline.component";
import {TimelineEventComponent} from "./timeline-event.component";
import {CareerHighlightComponent} from "./career-highlight.component";
import {TrustedContentComponent} from "./trusted-content.component";

@Component({
  selector: 'rc-work-topic',
  template: `
    <div class="topic place" id="work">
      <h4>Work</h4>
      <p class="lead">
        How I feed myself.
      </p>
      <p>
        I do something with computers is the gist of it. The roles and technologies have changed
        over the years, and I consider myself truly fortunate to work in a field that continues
        to offer interesting and exciting challenges, and where learning is a enduring experience.
        The short story is, I develop commercial grade computer software--which to me is the most
        fun that can be had with a computer; a longer story is below.
      </p>
      <p>
        <rc-timeline *ngIf="junctures" subject="Timeline">
          <rc-timeline-event *ngFor="let juncture of junctures; let i = index;" [inverted]="i % 2"
                             title="{{juncture.name}}" timeframe="{{juncture.caption}}" [badge]="badge(i)">
            <rc-career-highlight [categories]="juncture.categories" [activate]="juncture.categories[0]">
              <ul *ngFor="let category of juncture.categories" class="category {{category}}">
                <li *ngFor="let item of juncture.category(category)">
                  <rc-trusted-content [content]="item"></rc-trusted-content>
                </li>
              </ul>
            </rc-career-highlight>
          </rc-timeline-event>
        </rc-timeline>
      </p>
    </div>
  `,
  styles: [`
    ul.category {
      padding-left: 22px;
    }
  `],
  encapsulation: ViewEncapsulation.None,
  providers: [ExperienceService],
  directives: [TimelineComponent, TimelineEventComponent, CareerHighlightComponent, TrustedContentComponent]
})
export class WorkTopicComponent {
  constructor(private experienceService: ExperienceService) {}

  get junctures(): Juncture[] {
    return this.experienceService.experience;
  }

  badge(index: number): string {
    switch(index) {
      case 0: return 'first';
      case 1: return 'second';
      case 2: return 'third';
      case 3: return 'fourth';
      case 4: return 'fifth';
      case 5: return 'sixth';
      case 6: return 'seventh';
      case 7: return 'eighth';
      default: return '';
    }
  }
}