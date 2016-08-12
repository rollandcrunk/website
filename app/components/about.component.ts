import {Component, ChangeDetectorRef, AfterViewInit} from "@angular/core";
import {PageAnimation} from "./shared/page.animation";
import {ActivatedRoute} from "@angular/router";
import {CarouselComponent} from "./carousel.component";

@Component({
  selector: 'rc-about',
  templateUrl: 'app/components/about.component.html',
  animations: PageAnimation.FADE_IN_ANIMATION,
  directives: [ CarouselComponent ]
})
export class AboutComponent implements AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;

  constructor(private route: ActivatedRoute,
              private changeDetector: ChangeDetectorRef) {}

  // @fixme - better technique for dom access and manipulation.
  ngAfterViewInit(): any {
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
}