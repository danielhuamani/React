import { EcommerceangPage } from './app.po';

describe('ecommerceang App', function() {
  let page: EcommerceangPage;

  beforeEach(() => {
    page = new EcommerceangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
