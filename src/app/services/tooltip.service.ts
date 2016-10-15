import { Injectable } from '@angular/core';

declare var $: any;   // jQuery

@Injectable()
export class TooltipService {
  public enableTooltips(selector: string): void {
    $(selector).tooltip({selector: '[rel=tooltip]'});
  }
}
