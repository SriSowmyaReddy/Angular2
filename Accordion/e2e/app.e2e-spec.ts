import { AccordianPage } from './app.po';

describe('accordian App', () => {
  let page: AccordianPage;

  beforeEach(() => {
    page = new AccordianPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
