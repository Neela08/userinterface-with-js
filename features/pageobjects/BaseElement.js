class BaseElement {
   
  constructor(element) {
    this.element = element;
  }

  async isDisplayed() {
    return await $(this.element).isDisplayed();
  }
  async isExisting() {
    return await $(this.element).isExisting();
  }
  async isEnabled() {
    return await $(this.element).isEnabled();
  }

    async clickElement() {
    return  await $(this.element).click();
  }

  async getText() {
    return await $(this.element).getText();
  }

  async setValue(value) {
    return await $(this.element).setValue(value);
  }
}
module.exports = BaseElement;