import {ViewEncapsulation, Component, Input, OnInit, ElementRef, Renderer} from "@angular/core";

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
export class CareerHighlightComponent implements OnInit {
  @Input() activate: string;
  @Input() categories: string[];

  constructor(private elementRef: ElementRef,
              private renderer: Renderer) {}

  ngOnInit(): any {
    this.activateContent(this.activate);
  }

  onClick(category: string) {
    this.activateContent(this.activate = category);
  }

  private activateContent = (activate: string) => {
    let categoryContent = this.elementRef.nativeElement.getElementsByClassName('category');
    for (let i = 0; i < categoryContent.length; ++i) {
      let element: HTMLElement = categoryContent[i];
      this.renderer.setElementClass(element, 'active', (activate && element.classList.contains(activate)));
    }
  }
}