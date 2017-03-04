import { CallcalnterClientPage } from './app.po';

describe('callcalnter-client App', () => {
  let page: CallcalnterClientPage;

  beforeEach(() => {
    page = new CallcalnterClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
