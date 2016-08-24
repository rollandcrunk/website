import {ViewEncapsulation, Component} from "@angular/core";
import {TimelineComponent} from "./timeline.component";

@Component({
  selector: 'rc-work-topic',
  template: `
    <div class="topic" id="work">
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
      <p><rc-timeline subject="Technology path"></rc-timeline></p>
    </div>
  `,
  directives: [TimelineComponent],
  encapsulation: ViewEncapsulation.None,
})
export class WorkTopicComponent {
}