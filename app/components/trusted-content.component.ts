import {Component, Input} from "@angular/core";

import {BROWSER_SANITIZATION_PROVIDERS, DomSanitizationService, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'rc-trusted-content',
  template: `
    <span [innerHtml]="trustHtml(content)"></span>
  `,
  providers: [DomSanitizationService, BROWSER_SANITIZATION_PROVIDERS]
})
export class TrustedContentComponent {
  @Input() content: string;

  constructor(private sanitizer: DomSanitizationService) {}

  trustHtml = (resource: string): SafeHtml => {
    return this.sanitizer.bypassSecurityTrustHtml(resource);
  };
}