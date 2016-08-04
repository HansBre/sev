import { SevPage } from './app.po';

describe('sev App', function() {
  let page: SevPage;

  beforeEach(() => {
    page = new SevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
