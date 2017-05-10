import { IonHtml5WalletPage } from './app.po';

describe('ion-html5-wallet App', () => {
  let page: IonHtml5WalletPage;

  beforeEach(() => {
    page = new IonHtml5WalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
