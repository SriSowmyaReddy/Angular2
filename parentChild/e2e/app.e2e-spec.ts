import { ParentnodePage } from './app.po';

describe('parentnode App', () => {
  let page: ParentnodePage;

  beforeEach(() => {
    page = new ParentnodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
