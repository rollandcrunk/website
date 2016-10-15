import { ViewEncapsulation, Component } from '@angular/core';

import { MemoirService } from '../services';
import { CarouselMedia } from './carousel.component';

@Component({
  selector: 'rc-gallery-topic',
  template: `
    <div class="place topic" id="gallery">
      <h4>Gallery</h4>
      <p class="lead">
        Photographs.
      </p>
      <p><rc-carousel [media]="memoir('gallery')"></rc-carousel></p>
  </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class GalleryTopicComponent {
  constructor(private memoirService: MemoirService) {}

  memoir(title: string): CarouselMedia[] {
    return this.memoirService.getMemoir(title);
  }
}
