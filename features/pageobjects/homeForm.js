const { $ } = require("@wdio/globals");
const BasePage = require("./baseForm");
const BaseElement = require("./baseElement");

class HomePage extends BasePage {
  constructor() {
    super(".start__button");
    this.nextpage = new BaseElement('a[href="/game.html"]');
    this.timer = new BaseElement(".timer");
  }

  open() {
    return super.open("");
  }
  async clickNextPageButton() {
    await this.nextpage.clickElement();
  }
  async getTimerValue() {
    await this.timer.getTextFromElement();
  }
}

module.exports = new HomePage();
