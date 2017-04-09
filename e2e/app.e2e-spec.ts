import { RshotsPage } from './app.po';

describe('rshots App', function() {
  let page: RshotsPage;

  beforeEach(() => {
    page = new RshotsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
