import {ViewEncapsulation, Component, Renderer} from "@angular/core";

import {MemoirService} from "../services/memoir.service";
import {CarouselMedia, CarouselComponent} from "./carousel.component";

@Component({
  selector: 'rc-gallery-topic',
  template: `
    <div class="topic" id="gallery">
      <h4>Gallery</h4>
      <p class="lead">
        Photographs.
      </p>
      <p><rc-carousel [media]="memoir('gallery')"></rc-carousel></p>
  </div>
  `,
  directives: [CarouselComponent],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryTopicComponent {
  constructor(private memoirService: MemoirService) {}

  memoir(title: string): CarouselMedia[] {
    return this.memoirService.getMemoir(title);
  }
}