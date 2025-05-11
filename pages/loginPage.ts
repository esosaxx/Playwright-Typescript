import { Page, expect } from "@playwright/test";
export const loginPage = {
  username: "[data-test='username']",
  password: "[data-test='password']",
  loginButton: "[data-test='login-button']",

  async login(page: Page, username: any, password: any): Promise<void> {
    await page.fill(this.username, username);
    await page.fill(this.password, password);
    await page.click(this.loginButton);
  },

  async verifyTitle(page: Page) {
    await expect(page).toHaveTitle("Swag Labs");
  },
};
