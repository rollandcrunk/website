import {Component, ChangeDetectorRef, AfterViewInit} from "@angular/core";
import {PageAnimation} from "./shared/page.animation";

@Component({
  selector: 'rc-about',
  template: `
    <div class="container" @pageState="state">
      <div class="page-header m-t-1">
        <h2>About</h2>
      </div>
      <p class="lead">
        Notable experiences and events.
      </p>
      <p>
        Every individual has their own unique set of experiences and events; here are some of mine (in no particular order):
        <ul>
          <li>Served 3 years aboard a nuclear attack submarine.</li>
          <li>Drove a motorcycle from coast-to-coast across the continental US.</li>
          <li>Founded and managed a foreign corporation.</li>
          <li>Competed in AFM sanctioned motorcycle road racing events.</li>
          <li>Visited 30 states and 11 foreign countries.</li>
        </ul>
    </div>
  `,
  animations: PageAnimation.FADE_IN_ANIMATION
})
export class AboutComponent implements AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): any {
    this.state = PageAnimation.FADE_IN_ANIMATION_FINAL_STATE;
    this.changeDetector.detectChanges();
  }
}