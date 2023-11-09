const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require("@wdio/globals");

const HomePage = require("../pageobjects/homeForm.js");
const card1Page = require("../pageobjects/card1Form.js");
const card2Page = require("../pageobjects/card2Form.js");
const card3Page = require("../pageobjects/card3Form.js");

const randomCredentials = require("../../Utils/randomCredentials.js");
const emailLength = 5;
const domainLength = 5;
const passwordLength = 15;

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
  /^I Input random valid password, email, accept the terms of use$/,
  async () => {
    const email = randomCredentials.generateRandomString(emailLength);
    const password = randomCredentials.generateRandomPassword(
      email,
      passwordLength
    );
    const domain = randomCredentials.generateRandomString(domainLength);
    await card1Page.sendCredentials(email, password, domain);
  }
);

When(/^I choose random domain$/, async () => {
  await card1Page.selectRandomDropDown();
});

Then(/^I click next button$/, async () => {
  await card1Page.clickNextPage();
});
Then(/^The '2' card is open$/, async () => {
  expect(await card2Page.isPageOpen());
});

When(/^I Choose "([^"]*)" random interests$/, async (args1) => {
  await card2Page.randomSelection(args1);
});

When(/^upload image$/, async () => {
  await card2Page.clickUploadButton();
  await card2Page.uploadFileUsingAutoIt();
});

When(/^click Next button$/, async () => {
  await card2Page.clickNextPage();
});

Then(/^The '3' card is open$/, async () => {
  expect(await card3Page.isPageOpen());
});
