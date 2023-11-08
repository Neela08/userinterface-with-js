const { $ } = require("@wdio/globals");
const { execSync } = require("child_process");
const BasePage = require("./baseForm");
const BaseElement = require("./baseElement");

class card2Page extends BasePage {
  constructor() {
    super(".avatar-and-interests__avatar-upload-button");
    this.uploadPicButton = new BaseElement(
      ".avatar-and-interests__upload-button"
    );
    this.next = new BaseElement("button=Next");
    this.unselectAll = new BaseElement(
      '//label[@for="interest_unselectall"]//span[@class="checkbox__box"]'
    );
    this.checkboxLabel = new BaseElement("span:last-child");
  }
  async upload() {
    await this.uploadPicButton.clickElement();
  }
  async clickNextPage() {
    await this.next.clickElement();
  }
  open() {
    return super.open("game.html");
  }

  async uploadFileUsingAutoIt() {
    await execSync("uploadFile.exe", { windowsHide: true });
  }
  async randomSelection(num) {
    await this.unselectAll.clickElement();
    const checkboxes = this.getElements(
      ".avatar-and-interests__interests-list__item .checkbox__box"
    );

    const filteredCheckboxes = checkboxes.filter((checkbox) => {
      const labelText = this.checkboxLabel.getText();
      return labelText !== "Select all" && labelText !== "Unselect all";
    });

    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * filteredCheckboxes.length);
      const checkboxElement = filteredCheckboxes[randomIndex];
      await checkboxElement.click();
    }
  }
}

module.exports = new card2Page();
