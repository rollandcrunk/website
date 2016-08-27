import {ViewEncapsulation, Component} from "@angular/core";

import {QuoteService, Quote} from "../services/quote.service";

@Component({
  selector: 'rc-opinion-topic',
  templateUrl: 'app/components/html/opinion-topic.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [ QuoteService]
})
export class OpinionTopicComponent {
  constructor(private quoteService: QuoteService) {}

  get quotes(): Quote[] { return this.quoteService.quotes; }
}