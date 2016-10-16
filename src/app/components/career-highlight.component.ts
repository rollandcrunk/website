import { ViewEncapsulation, Component, Input, ElementRef, Renderer, AfterViewInit } from '@angular/core';
import { AnalyticsService } from '../services';

@Component({
  selector: 'rc-career-highlight',
  template: `
    <ul *ngIf="categories" class="nav nav-inline nav-pills">
      <li *ngFor="let category of categories" class="nav-item">
        <span class="nav-link {{category}}" [class.active]="activate == category" (click)="onClick(category)">{{category}}</span>
      </li>
    </ul>
    <p>
      <ng-content></ng-content>
    </p>
  `,
  styles: [`
    span.nav-link {
      cursor: pointer;
    }
    
    .category {
      display: none;
    }
    
    .category.active {
      display: block;
    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class CareerHighlightComponent implements AfterViewInit {
  @Input() title: string = 'Untitled';
  @Input() activate: string;
  @Input() categories: string[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer,
              private analyticsService: AnalyticsService) {}

  ngAfterViewInit(): any {
    if (this.activate) this.activateContent(this.activate);
  }

  onClick(category: string) {
    this.activateContent(this.activate = category);
  }

  private activateContent = (activate: string) => {
    this.analyticsService.timelineEvent(this.title, activate);
    let categoryContent = this.elementRef.nativeElement.getElementsByClassName('category');
    for (let i = 0; i < categoryContent.length; ++i) {
      let element: HTMLElement = categoryContent[i];
      this.renderer.setElementClass(element, 'active', (activate && element.classList.contains(activate)));
    }
  }
}
