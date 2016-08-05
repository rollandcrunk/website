import {Component} from "@angular/core";

@Component({
  selector: 'rc-not-found',
  template: `
    <div class="container">
      <div class="page-header m-t-1">
        <h2>Uh oh</h2>
      </div>
      <p class="lead">You've stumbled across an unknown route; undoubtedly through no fault of your own.</p>
      <p>Click one of the juvawavis above to get to the good stuff.</p>
    </div>
  `
})
export class NotFoundComponent {
}