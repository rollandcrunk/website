import { browser, element, by } from 'protractor';

export class RollandcrunkComPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rc-main rc-page rc-welcome p.lead')).getText();
  }
}
