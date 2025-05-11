import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { productPage } from "../pages/productPage";
import { loginCredentials } from "../testData/loginData";
const { username, password } = loginCredentials;

test.describe("Remove Product", () => {
  test.beforeEach("login", async ({ page }) => {
    await page.goto("/");
    await loginPage.login(page, username, password);
  });

  test("Remove a product from the cart and verify it is no longer listed", async ({
    page,
  }) => {
    await page.locator(productPage.backpackAddToCartButton).click();
    await page.locator(productPage.bikeAddToCartButton).click();
    await productPage.clickBasket(page);
    await page.locator(productPage.removeBackpackButton).click();
    await productPage.verifyBasketCount(page, 1);
    await expect(
      page.locator(productPage.basketItem, { hasText: "Sauce Labs Backpack" }),
    ).not.toBeVisible();
  });
});
