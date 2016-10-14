import {Component, Input} from "@angular/core";

import {SafeHtml, DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'rc-trusted-content',
  template: `
    <span [innerHtml]="trustHtml(content)"></span>
  `,
})
export class TrustedContentComponent {
  @Input() content: string;

  constructor(private sanitizer: DomSanitizer) {}

  trustHtml = (resource: string): SafeHtml => {
    return this.sanitizer.bypassSecurityTrustHtml(resource);
  };
}