import { Page, expect } from "@playwright/test";
export const checkoutDetailsPage = {
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continueButton: '[data-test="continue"]',

  async clickContinueButton(page: Page) {
    await page.click(this.continueButton);
  },
};
