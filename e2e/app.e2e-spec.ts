import { ConversionRatesPage } from './app.po';

describe('ConversionRateGraphsFE App', () => {
  let page: ConversionRatesPage;

  beforeEach(() => {
    page = new ConversionRatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
