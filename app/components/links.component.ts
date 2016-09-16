import {Component, ChangeDetectorRef, AfterViewInit} from "@angular/core";
import {PageAnimation} from "./shared/page.animation";

@Component({
  selector: 'rc-links',
  template: `
    <div id="links" class="place container" @pageState="state">
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
            <a href="http://crunk.net" target="_blank">Crunk.net</a> - My first personal website.
            All of the original content was taken down for reconstruction and
            never reappeared. Instead, being replaced with a CSS themes demo that gets a refresh every
            few years when its technology gets stale and there is new technology that I want to play with.
            The current permutation is written using Angular Dart.
          </li>
        </ul>
        <p>
        User facing commercial sites I've helped build:
        <ul>
          <li>
            <a href="https://www.google.com/about/careers/jobs" target="_blank">Google Careers</a>
            A great place to work. The original site is still <a href="https://www.google.com/about/careers/search" target="_blank">here</a>.
          </li>
        </ul>
        <p>
          Sites I frequent.
        <ul>
          <li>
            <a href="http://reason.com/" target="_blank">Reason Magazine</a> 
            - For news, information, and opinion that is in rough alignment with my own.
          </li>
          <li>
            <a href="http://antiwar.com/" target="_blank">AntiWar.COM</a> 
            - A collection of news and information that generally goes under reported by main stream media. 
          </li>
          <li>
            <a href="https://dzone.com/" target="_blank">DZone</a> 
            - Technical articles relating to a broad range of topics in software development.
          </li>
          <li>
            <a href="http://stackoverflow.com/" target="_blank">Stack Overflow</a> 
            - My navigation here is typically from search results hits. An extraordinarily
            valuable resource for software developers.
          </li>
          <li>
            <a href="https://www.smashingmagazine.com/" target="_blank">Smashing Magazine</a> 
            - Helpful articles covering different aspects of web design and development.
          </li>
        </ul>
    </div>
  `,
  animations: PageAnimation.FADE_IN_ANIMATION
})
export class LinksComponent implements AfterViewInit {
  private state: string = PageAnimation.FADE_IN_ANIMATION_INIT_STATE;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): any {
    this.state = PageAnimation.FADE_IN_ANIMATION_FINAL_STATE;
    this.changeDetector.detectChanges();
  }
}