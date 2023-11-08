const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const HomePage = require("../pageobjects/homeForm.js");
const card1Page = require("../pageobjects/card1Form.js");
const card2Page = require("../pageobjects/card2Form.js");
const card3Page = require("../pageobjects/card3Form.js");

const randomCredentials = require("../../Utils/randomCredentials.js");
const email = "",
  password = "",
  domain = "";

Given(/^I am on the Home Page$/, async () => {
  await HomePage.open();
});

When(/^I Click the link to navigate the next page$/, async () => {
  await HomePage.clickNextPageButton();
});

Then(/^The '1' card is open$/, async () => {
  expect(await card1Page.isPageOpen());
});

When(
  /^I Input random valid password, email, accept the terms of use and click next button$/,
  async () => {
    this.email = randomCredentials.generateRandomString(5);
    this.password = randomCredentials.generateRandomPassword(email);
    this.domain = randomCredentials.generateRandomString(5);
    await card1Page.sendCredentials(email, password, domain);
    await card1Page.selectRandomDropDown();
    await card1Page.clickNextPage();
    console.debug('#####################################',email)
    console.debug(password)
    console.debug(domain)
  }
);
Then(/^The '2' card is open$/, async () => {
  expect(await card2Page.isPageOpen()).toBe(true);
});

When(
  /^I Choose 3 random interests, upload image, click Next button.$/,
  async () => {
    await card2Page.randomSelection(3);
    await card2Page.upload();
    await card2Page.uploadFileUsingAutoIt();
    await card2Page.clickNextPage();
  }
);

Then(/^The '3' card is open$/, async () => {
  expect(await card3Page.isPageOpen()).toBe(true);
});
