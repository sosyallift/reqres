import { AppPage } from './app.po';

describe('Sample page1', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Sample1 page');
    });

    it('should wait before page content loads', async() => {
        page.navigateTo();

        // page content should be loaded correctly
        expect(await page.waitForElement('page-content')).toBe(true);

        // the page sub header should be available
        expect(page.findElementByText('.title', 'Hello World').count()).toBe(1);
    });
});
