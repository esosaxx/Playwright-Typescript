import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { productPage } from "../pages/productPage";
import { loginCredentials } from "../testData/loginData";
const { username, password } = loginCredentials;

test.describe("Logout", () => {
  test.beforeEach("Login", async ({ page }) => {
    await page.goto("/");
    await loginPage.login(page, username, password);
  });

  test("Verify users can logout successfully", async ({ page }) => {
    await productPage.clickMenuSideBar(page);
    await productPage.clickLogoutButton(page);
    await expect(page.locator(loginPage.loginButton)).toBeVisible();
  });
});
