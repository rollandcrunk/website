import {Component, ViewEncapsulation, ChangeDetectorRef, AfterViewInit} from "@angular/core";

import {MemoirService} from "../services/memoir.service";

@Component({
  selector: 'rc-about',
  templateUrl: 'app/components/html/about.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent {
}