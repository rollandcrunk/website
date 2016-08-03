import {Component} from "@angular/core";

@Component({
  selector: 'rc-links',
  template: `
    <div class="container">
      <div class="page-header m-t-1">
        <h2>Links</h2>
      </div>
      <p class="lead">
        Some potential destinations from here.
      </p>
      <p>
        Other websites of mine.
        <ul>
          <li>
            <a href="http://crunk.net">Crunk.net</a> - Where it all started; my first website.
            All of the original content was taken down for reconstruction and
            never reappeared. Instead being replaced with a CSS theme demo, originally
            built using Ruby on Rails, the server side was later deemed unneeded and
            redone simply using client javascript; a later (and current) permutation 
            utilizes Angular Dart.
          </li>
        </ul>
    </div>
  `
})
export class LinksComponent {
}