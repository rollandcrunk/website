import { Component } from "@angular/core";

@Component({
  selector: 'rc-logo',
  template: `
    Rolland<span class="space"></span>Crunk<span class="period">.</span><span>com</span>
  `,
  styles: [`
    span.space {
      display: inline-block; 
      width:.15rem;
    }
    span.period {
      font-weight: 100; 
      color:#ccc8cc;
    }
  `]
})
export class LogoComponent {
}
