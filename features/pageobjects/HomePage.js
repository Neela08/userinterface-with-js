const { $ } = require('@wdio/globals')
const BasePage = require('./BasePage');
const BaseElement = require('./BaseElement');

class HomePage extends BasePage {
   
    constructor() {
        super('.start__button');
        this.nextpage = new BaseElement('a[href="/game.html"]');

      }

    open () {
        return super.open('');
    }
    async clickNextPageButton()
    {
        await this.nextpage.clickElement()
    }
}

module.exports = new HomePage();
