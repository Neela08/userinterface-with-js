const { $ } = require("@wdio/globals");
const BasePage = require("./baseForm");
const BaseElement = require("./baseElement");

class card3Page extends BasePage {
  constructor() {
    super(".toggle-buttons");
  }

  open() {
    return super.open("game.html");
  }
}

module.exports = new card3Page();
