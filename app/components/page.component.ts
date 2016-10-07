import {ActivatedRoute} from "@angular/router";

import {
  Component,
  ChangeDetectorRef,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from "@angular/core";

import {PageAnimation} from "./shared/page.animation";
import {AnalyticsService, MemoirService, TooltipService} from "../services";
import {StyleConfig} from "../style.config";

@Component({
  selector: 'rc-page',
  template: `
    <div rc-scroll-spy="place" [@pageState]="state">
      <rc-welcome></rc-welcome>
      <rc-about></rc-about>
      <rc-links></rc-links>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.FADE_IN_ANIMATION,
  providers: [MemoirService, TooltipService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;

  private fixedArtifactsTop = 0;

  constructor(styleConfig: StyleConfig,
              private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef,
              private analyticsService: AnalyticsService,
              private tooltipService: TooltipService) {
    this.fixedArtifactsTop = styleConfig.fixedArtifactsTop;
  }

  // @fixme - better technique for dom access and manipulation.
  ngAfterViewInit(): any {
    this.tooltipService.enableTooltips('rc-page');
      this.route.params.subscribe(params => {
      let id = params['id'];
      console.debug('params id: ' + id);
      if (id) {
        let anchor = document.getElementById(id);
        if (anchor) {
          document.body.scrollTop = anchor.offsetTop - this.fixedArtifactsTop;
          this.state = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;
          this.changeDetector.detectChanges();
          this.analyticsService.navigateTo(id);
        }
      }
      else document.body.scrollTop = 0;

      //setTimeout(() => {
        this.state = PageAnimation.FADE_IN_ANIMATION_FINAL_STATE;
      //}, 50);
        //this.changeDetector.detectChanges();
    });
  }
}