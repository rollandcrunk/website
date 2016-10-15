import { Component } from '@angular/core';

@Component({
  selector: 'rc-main',
  template: `
    <div>
      <rc-navbar></rc-navbar>
      <router-outlet></router-outlet>
      <rc-footer></rc-footer>
    </div>
  `,
})
export class MainComponent {
}
