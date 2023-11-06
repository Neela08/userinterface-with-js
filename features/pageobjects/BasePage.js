class BasePage {
  constructor(pageLocator) {
    this.pageLocator = pageLocator;
  }

  
  open (path) {
    return browser.url(`https://userinyerface.com/${path}`)
}
 async isPageOpen() {

  return $(this.pageLocator).isExisting() && $(this.pageLocator).isDisplayed();
}
}

module.exports = BasePage;
