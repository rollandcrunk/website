import {
  Component,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

import {ActivatedRoute} from "@angular/router";

import {PageAnimation} from "./shared/page.animation";
import {WelcomeComponent} from "./welcome.component";
import {AboutComponent} from "./about.component";
import {LinksComponent} from "./links.component";
import {MemoirService, TooltipService} from "../services";
import {ScrollSpy} from "../directives/scroll-spy.directive";
import {StyleConfig} from "../style.config";


@Component({
  selector: 'rc-page',
  template: `
    <div rc-scroll-spy="place">
      <rc-welcome></rc-welcome>
      <rc-about></rc-about>
      <rc-links></rc-links>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.FADE_IN_ANIMATION,
  providers: [MemoirService, TooltipService],
  directives: [ScrollSpy, WelcomeComponent, AboutComponent, LinksComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit, AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;

  private fixedArtifactsTop = 0;

  constructor(styleConfig: StyleConfig,
              private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef,
              private tooltipService: TooltipService) {
    this.fixedArtifactsTop = styleConfig.fixedArtifactsTop;
  }

  ngOnInit(): any {
  }

  // @fixme - better technique for dom access and manipulation.
  ngAfterViewInit(): any {
    this.tooltipService.enableTooltips('rc-page');

    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        let anchor = document.getElementById(id);
        if (anchor) {
          document.body.scrollTop = anchor.offsetTop - this.fixedArtifactsTop;
          this.state = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;
          this.changeDetector.detectChanges();
        }
      }
      else document.body.scrollTop = 0;

      this.state = PageAnimation.FADE_IN_ANIMATION_FINAL_STATE;
      this.changeDetector.detectChanges();
    });
  }
}