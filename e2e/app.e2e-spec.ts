import { AsgolfWebAppPage } from './app.po';

describe('asgolf-web-app App', () => {
  let page: AsgolfWebAppPage;

  beforeEach(() => {
    page = new AsgolfWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
