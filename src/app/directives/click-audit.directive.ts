import { Directive, ElementRef, Renderer } from '@angular/core';
import { AnalyticsService } from '../services';

@Directive({
  selector: '[rcClickAudit]'
})
export class ClickAuditDirective {
  constructor(elementRef: ElementRef,
              renderer: Renderer,
              analyticsService: AnalyticsService) {
    let nativeElement = elementRef.nativeElement;
    renderer.listen(nativeElement, 'click', (event) => {
      let href = nativeElement.getAttribute('href');
      if (href)
        analyticsService.clickAuditEvent(href);
    });
  }
}
