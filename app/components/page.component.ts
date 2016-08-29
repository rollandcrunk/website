import {
  Component,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit,
  ViewEncapsulation,
  ElementRef,
  ChangeDetectionStrategy
} from "@angular/core";

import {ActivatedRoute} from "@angular/router";

import {PageAnimation} from "./shared/page.animation";
import {WelcomeComponent} from "./welcome.component";
import {AboutComponent} from "./about.component";
import {LinksComponent} from "./links.component";
import {MemoirService, TooltipService} from "../services";

class Place {
  id: string;
  top: number;
}

@Component({
  selector: 'rc-page',
  template: `
    <rc-welcome></rc-welcome>
    <rc-about></rc-about>
    <rc-links></rc-links>
  `,
  encapsulation: ViewEncapsulation.None,
  animations: PageAnimation.FADE_IN_ANIMATION,
  providers: [MemoirService, TooltipService],
  directives: [WelcomeComponent, AboutComponent, LinksComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit, AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;

  // @todo - scroll spy
  private places: Place[] = [];

  constructor(private pageElement: ElementRef,
              private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef,
              private tooltipService: TooltipService) {}

  ngOnInit(): any {
    this.catalog()
  }

  // @fixme - better technique for dom access and manipulation.
  ngAfterViewInit(): any {
    this.tooltipService.enableTooltips('rc-page');

    this.route.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        let anchor = document.getElementById(id);
        if (anchor) {
          document.body.scrollTop = anchor.offsetTop - 87;
          this.state = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;
          this.changeDetector.detectChanges();
        }
      }
      else document.body.scrollTop = 0;

      this.state = PageAnimation.FADE_IN_ANIMATION_FINAL_STATE;
      this.changeDetector.detectChanges();
    });
  }

  private catalog = () => {
    let places = this.pageElement.nativeElement.getElementsByClassName('place');
    for (let i = 0; i < places.length; ++i) {
      let topic = places[i];
      if (topic.id) this.places.push({ id: topic.id, top: topic.offsetTop });
    }
  };
}