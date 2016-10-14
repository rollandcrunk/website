import { RollandcrunkComPage } from './app.po';

describe('rollandcrunk-com App', function() {
  let page: RollandcrunkComPage;

  beforeEach(() => {
    page = new RollandcrunkComPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to RollandCrunk.com');
  });
});
