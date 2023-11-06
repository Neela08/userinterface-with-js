const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')


const card1Page = require('../pageobjects/card1Page');
const HomePage = require('../pageobjects/HomePage');



Given(/^I am on the Home Page$/, async () => {
    await HomePage.open()
});

When(/^I Click the link to navigate the next page$/, async() => {
	await HomePage.clickNextPageButton()
  
});

Then(/^The '1' card is open$/, async () => {
    expect(await card1Page.isPageOpen())
});

