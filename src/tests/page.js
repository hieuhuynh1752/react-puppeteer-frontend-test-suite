const puppeteer = require('puppeteer');

class CustomPage {
    static async build() {
        const browser = await puppeteer.launch(
            {
                args: ['--no-sandbox'],
                headless: false
            }
        )
        const page = await browser.newPage();

        return new Proxy(CustomPage, {
            get: (target, property) =>{
                return target[property] || page[property];
            }
        })
    }

    constructor(page) {
        this.page = page;
    }
    
    // getContentOf(selector) {
    //     return this.page.$eval(selector, el => el.innerHTML);
    // }

    execRequest(actions){
        return Promise.all(
            actions.map(({method, path, data}) => this[method](path, data))
        )
    }
}

module.exports = CustomPage;