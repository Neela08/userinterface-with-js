const { $ } = require("@wdio/globals");
const BasePage = require("./baseForm");
const BaseElement = require("./baseElement");

class card1Page extends BasePage {
  constructor() {
    super(".dropdown__field");

    this.TermsAndConditions = new BaseElement(".icon-check");
    this.domainDropDownButton = new BaseElement(
      '//div[@class="dropdown__field"]'
    );

    this.nextButton = new BaseElement(
      '//a[contains(@class, "button--secondary")]'
    );
    this.dropdownList = new BaseElement(".dropdown__list");
    this.pass = new BaseElement('//input[contains(@placeholder, "Password")]');
    this.user = new BaseElement('//input[contains(@placeholder, "email")]');
    this.domain = new BaseElement('//input[contains(@placeholder, "Domain")]');
  }

  open() {
    return super.open("game.html");
  }
  async sendCredentials(email, pass, domain) {
    await this.user.setValue(email);
    await this.pass.setValue(pass);
    await this.domain.setValue(domain);
    await this.TermsAndConditions.clickElement();
  }
  async clickNextPage() {
    await this.nextButton.clickElement();
  }

  async selectRandomDropDown() {
    await this.domainDropDownButton.clickElement();
    const getdropDownList = await this.dropdownList.getElement();
    const listItems = await getdropDownList.$$(".dropdown__list-item");

    const randomIndex = Math.floor(Math.random() * listItems.length);
    const randomDropDown = listItems[randomIndex];
    await randomDropDown.click();
  }
}

module.exports = new card1Page();
