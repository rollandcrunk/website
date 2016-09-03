import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class PlaceChangeEvent extends EventEmitter<string[]> {
  constructor() {
    super(true);
  }
}