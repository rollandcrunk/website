import { Component } from "@angular/core";

@Component({
  selector: 'rc-logo',
  template: `
    <span class="rc-logo">
      Rolland<span class="space"></span>Crunk<span class="period">.</span><span class="ext">com</span>
    </span>
  `,
  styles: [`
    span.rc-logo {
      font-family: "Courier New", Courier, monospace;
      font-size: 1.5rem;
      font-weight: bold;
      color: #49274a;
      text-shadow: 1px -1px 2px rgba(253, 254, 255, 0.5);
      opacity: .65;
      line-height: 1.5rem;
    }
    span.space {
      display: inline-block; 
      width:.15rem;
    }
    span.period {
      font-weight: 100;
      font-size: 14px;
    }
    span.ext {
      font-size: 1rem;
      opacity: .85;
    }
  `]
})
export class LogoComponent {
}
