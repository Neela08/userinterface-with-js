
const BasePage = require("./baseForm");
const BaseElement = require("./baseElement");

class CookiesForm extends BasePage {
  constructor() {
    super(".cookies");
    this.acceptButton = new BaseElement(
      '//button[contains(@class, "button--solid") and contains(@class, "button--transparent") and text()="Not really, no"]'
    );
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
