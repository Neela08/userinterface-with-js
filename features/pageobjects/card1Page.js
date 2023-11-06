const { $ } = require('@wdio/globals')
const BasePage = require('./BasePage');
const BaseElement = require('./BaseElement');

class card1Page extends BasePage {
   
    constructor() {
        super('.dropdown__field');

      }

    open () {
        return super.open('game.html');
    }
}

module.exports = new card1Page();
