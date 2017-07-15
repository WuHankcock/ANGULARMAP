import { ANGULARMAPPage } from './app.po';

describe('angularmap App', () => {
  let page: ANGULARMAPPage;

  beforeEach(() => {
    page = new ANGULARMAPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
