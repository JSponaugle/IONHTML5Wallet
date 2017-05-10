import { browser, element, by } from 'protractor';

export class IonHtml5WalletPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
