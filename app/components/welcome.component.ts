import {Component, ChangeDetectorRef, AfterViewInit} from "@angular/core";
import {PageAnimation} from "./shared/page.animation";

@Component({
  selector: 'rc-welcome',
  template: `
    <div id="home" class="place container" @pageState="state">
      <div class="page-header m-t-1">
        <h2>Home</h2>
      </div>
      <p class="lead">
        Welcome to RollandCrunk.com
      </p>
      <p>
        I hope your visit here will be an enjoyable one. However I do recognize that personal
        home pages are not generally the most exciting things that can be found on the internet, and I
        doubt that my page is any exception. But feel free to roam around and explore; perhaps you will
        find something that piques your interest.
      </p>
    </div>
  `,
  animations: PageAnimation.FADE_IN_ANIMATION
})
export class WelcomeComponent implements AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): any {
    this.state = PageAnimation.FADE_IN_ANIMATION_FINAL_STATE;
    this.changeDetector.detectChanges();
  }
}
