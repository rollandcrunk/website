import { style, trigger, state, transition, animate } from "@angular/core";

const createdState = 'created';
const readyState = 'ready';

export class PageAnimation {
  /**
   * Fade in animation. Clients must bind variable to {@pageState} at the element that
   * the animation applies, that will cycle between {FADE_IN_ANIMATION_INIT_STATE}
   * and {FADE_IN_ANIMATION_FINAL_STATE}.
   *
   * @type {AnimationEntryMetadata[]}
   */
  public static FADE_IN_ANIMATION = [
    trigger('pageState', [
      state(createdState, style({opacity: .25, transform: 'scale(.95)'})),
      state(readyState, style({opacity: 1, transform: 'scale(1)'})),
      transition('* <=> *', animate('256ms ease-in'))
    ])
  ];
  public static FADE_IN_ANIMATION_INIT_STATE = createdState;
  public static FADE_IN_ANIMATION_FINAL_STATE = readyState;
}