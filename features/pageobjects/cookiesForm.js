const { $ } = require("@wdio/globals");
const BasePage = require("./baseForm");
const BaseElement = require("./baseElement");

class CookiesForm extends BasePage {
  constructor() {
    super(".cookies");
    this.acceptButton = new BaseElement(".button--transparent");
  }

  open() {
    return super.open("");
  }
  async clickAcceptButton() {
    await this.acceptButton.waitForBeDisplayed(true);
    await this.acceptButton.clickElement();
  }
}

module.exports = new CookiesForm();
