class BaseElement {
  constructor(locator) {
    this.locator = locator;
  }

  async isDisplayed() {
    return await $(this.locator).isDisplayed();
  }
  async isExisting() {
    return await $(this.locator).isExisting();
  }
  async isEnabled() {
    return await $(this.locator).isEnabled();
  }
  async waitForBeDisplayed(condition) {
    return await $(this.locator).waitForDisplayed(condition);
  }
  async getTextFromElement() {
    return await $(this.locator).getText();
  }

  async clickElement() {
    return await $(this.locator).click();
  }

  async getText() {
    return await $(this.locator).getText();
  }

  async setValue(value) {
    return await $(this.locator).setValue(value);
  }

  async getElement() {
    return await $(this.locator);
  }

  async getElements() {
    return await $$(this.locator);
  }
  async scrollIntoView() {
    return await $(this.locator).scrollIntoView();
  }
}
module.exports = BaseElement;
