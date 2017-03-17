import { SipPage } from './app.po';

describe('sip App', () => {
  let page: SipPage;

  beforeEach(() => {
    page = new SipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
