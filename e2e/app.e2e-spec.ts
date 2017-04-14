import { NotarinPage } from './app.po';

describe('notarin App', () => {
  let page: NotarinPage;

  beforeEach(() => {
    page = new NotarinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
