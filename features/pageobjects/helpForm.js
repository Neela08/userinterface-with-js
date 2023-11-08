const { $ } = require("@wdio/globals");
const BasePage = require("./baseForm");
const BaseElement = require("./baseElement");

class HelpForm extends BasePage {
  constructor() {
    super(".help-form__help-button");
    this.hideButton = new BaseElement(".help-form__send-to-bottom-button");
  }

  open() {
    return super.open("");
  }
  async clickHideButton() {
    await this.hideButton.clickElement();
  }
}

module.exports = new HelpForm();
