import { browser, by, element, protractor, ElementArrayFinder } from 'protractor';
import { promise as webdriverPromise } from 'selenium-webdriver';

export class AppPage {
    navigateTo() {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText() as Promise<string>;
    }

    /**
     * Wait for element
     */
    waitForElement(cssClass: string, timeOut: number = 5000): webdriverPromise.Promise<any>  {
        const EC = protractor.ExpectedConditions;

        return browser.wait(EC.presenceOf(element(by.className(cssClass))), timeOut);
    }

    /**
     * Find element by text
     */
    findElementByText(cssClass: string, text: string): ElementArrayFinder {
        return element.all(by.cssContainingText(cssClass, text));
    }

}
