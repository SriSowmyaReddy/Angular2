import { NavigationPage } from './app.po';

describe('navigation App', () => {
  let page: NavigationPage;

  beforeEach(() => {
    page = new NavigationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
