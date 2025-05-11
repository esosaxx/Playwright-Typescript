import { Page, expect } from "@playwright/test";

export const productPage = {
  title: "[data-test='title']",
  backpackAddToCartButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
  bikeAddToCartButton: '[data-test="add-to-cart-sauce-labs-bike-light"]',
  shoppingCartButton: '[data-test="shopping-cart-link"]',
  basketIcon: "[data-test='shopping-cart-badge']",
  basketItem: "[data-test='inventory-item']",
  removeBackpackButton: '[data-test="remove-sauce-labs-backpack"]',
  menuSidebar: "#react-burger-menu-btn",
  checkoutButton: '[data-test="checkout"]',
  logoutButton: '[data-test="logout-sidebar-link"]',

  async verifyTitle(page: Page): Promise<void> {
    await expect(page.locator(this.title)).toHaveText("Products");
  },

  async clickBasket(page: Page) {
    await page.click(this.shoppingCartButton);
  },

  async verifyBasketCount(page: Page, number: number) {
    const count = await page.$$(this.basketItem);
    await expect(count.length).toBe(number);
  },

  async clickMenuSideBar(page: Page) {
    await page.click(this.menuSidebar);
  },

  async clickLogoutButton(page: Page) {
    await page.click(this.logoutButton);
  },

  async clickCheckoutButton(page: Page) {
    await page.click(this.checkoutButton);
  },
};
