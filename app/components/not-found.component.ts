import {Component} from "@angular/core";

@Component({
  selector: 'rc-not-found',
  template: `
    <div class="container">
      <div class="page-header m-t-1">
        <h2>Uh oh</h2>
      </div>
      <p>
        You've stumbled across an unknown route; undoubtedly through no fault of your own.
      </p>
    </div>
  `
})
export class NotFoundComponent {
}