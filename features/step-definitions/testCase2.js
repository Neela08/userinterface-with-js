const { Given, When, Then } = require("@wdio/cucumber-framework");

const { expect, $ } = require("@wdio/globals");
const HelpForm = require("../pageobjects/helpForm");
const HomePage = require("../pageobjects/homeForm");
const cookiesForm = require("../pageobjects/cookiesForm");

//test case 2

Then(/^I can see a help form$/, async () => {
  await expect(HelpForm.isPageOpen());
});

When(/^I Hide help form$/, async () => {
  await HelpForm.clickHideButton();
});

Then(/^Help form is hidden$/, async () => {
  const timeout = 20000;

  browser.waitUntil(
    async () => {
      return HelpForm.isPageOpen() === false;
    },
    {
      timeout,
      timeoutMsg: "Help form was not hidden within the specified time",
      interval: 1000,
    }
  );

  const isHidden = (await HelpForm.isPageOpen()) === false;
  expect(isHidden);
});

Then(/^I can see cookies form$/, async () => {
  expect(cookiesForm.isPageOpen());
});

When(/^I accept cookies$/, async () => {
  await cookiesForm.clickAcceptButton();
});

Then(/^Cookies form is closed$/, async () => {
  const isOpened = await cookiesForm.isPageOpen();
  expect(!isOpened);
});

Then(/^I can see timer starts from  00:00$/, async () => {
  let timer = await HomePage.getTimerValue();
  console.debug(timer);
  expect(timer).toHaveTextContaining("00:00:00");
});
