import { ViewEncapsulation, Component } from '@angular/core';

import { Quote, QuoteService, ObservationService } from '../services';

@Component({
  selector: 'rc-opinion-topic',
  template: `
    <div class="place topic" id="opinion">
      <h4>Opinion</h4>
      <p class="lead">
        An insight into my views on technology, political issues, and life in general.
      </p>
      <p *ngIf="quotes">
        Until I have a blog up, here are some quotes that describe my views:
      </p>
      <div *ngFor="let quote of quotes" class="blockquote">
        <p>{{quote.text}}</p>
        <p class="blockquote-footer">{{quote.author}}</p>
      </div>
    
      <p *ngIf="observations">And some of my own observations:</p>
      <div  *ngIf="observations" class="blockquote">
        <p *ngFor="let observation of observations">{{observation}}</p>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  providers: [ QuoteService, ObservationService ]
})
export class OpinionTopicComponent {
  constructor(private quoteService: QuoteService,
              private observationService: ObservationService) {}

  get quotes(): Quote[] { return this.quoteService.quotes; }
  get observations(): string[] { return this.observationService.observations; }
}
