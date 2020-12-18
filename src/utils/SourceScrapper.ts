const puppeteer = require('puppeteer');

export class SourceScrapper {

    /**
     * Grabs the source code of the given website and returns it.
     * @param url The url to the wanted website.
     */
    public static async grab(url: string): Promise<string> {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        let source: string = await page.evaluate(`document.querySelector('body').outerHTML`);
        await browser.close();
        return source;
    }

}