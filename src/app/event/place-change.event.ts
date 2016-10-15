import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PlaceChangeEvent extends EventEmitter<string[]> {
  public get SCROLL_EVENT(): string { return '+'; }
  public get UNDER_EVENT(): string { return '^'; }

  constructor() {
    super(true);
  }
}
