
const BasePage = require("./baseForm");


class card3Page extends BasePage {
  constructor() {
    super(".toggle-buttons");
  }

  open() {
    return super.open("game.html");
  }
}

module.exports = new card3Page();
