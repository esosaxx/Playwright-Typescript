import { Page, expect } from "@playwright/test";
export const checkoutOverviewPage = {
  finishButton: '[data-test="finish"]',

  async clickFinishButton(page: Page) {
    await page.click(this.finishButton);
  },
};
