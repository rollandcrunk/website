import { style, trigger, state, transition, animate, keyframes } from '@angular/core';

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
      state(createdState, style({opacity: .25, transform: 'scale(.97)'})),
      transition('created <=> ready', [
        animate(256, keyframes([
          style({opacity: .25, transform: 'scale(.97)', offset: 0}),
          style({opacity: .25, transform: 'scale(1)', offset: 0.5}),
          style({opacity: 1, transform: 'scale(1)', offset: 1.0}),
        ]))
      ])
    ])
  ];
  public static FADE_IN_ANIMATION_INIT_STATE = createdState;
  public static FADE_IN_ANIMATION_FINAL_STATE = readyState;


  public static MEDIA_CHANGE_ANIMATION = [
    trigger('mediaState', [
      state('incoming', style({opacity: 0})),
      state('next', style({opacity: 0, transform: 'translate3d(100%, 0, 0)'})),
      state('prev', style({opacity: 0, transform: 'translate3d(-100%, 0, 0)'})),
      transition('* <=> *', animate('256ms ease-in-out'))
    ])
  ];
}
