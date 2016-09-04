import {Directive, Input, ElementRef, Renderer} from "@angular/core";
import {PlaceChangeEvent} from "../event/place-change.event";

@Directive({selector: '[rc-link-for]'})
export class LinkForDirective {
  @Input('rc-link-for') linkFor: string;

  constructor(placeChangeEvent: PlaceChangeEvent,
              private elementRef: ElementRef,
              private renderer: Renderer) {
    placeChangeEvent.subscribe((items) => this.refresh(items));
  }

  private refresh = (items: string[]): void => {
    this.renderer.setElementClass(this.elementRef.nativeElement, 'active', items.indexOf(this.linkFor) >= 0);
  }
}