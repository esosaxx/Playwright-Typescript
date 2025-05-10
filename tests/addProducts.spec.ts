import {test, expect} from '@playwright/test'
import { loginPage } from '../pages/loginPage'
import { productPage } from '../pages/productPage'
import { loginCredentials } from '../testData/loginData'
const {username, password} = loginCredentials

test.describe("Test Add to Cart", () => {

test.beforeEach("Login", async({page}) => {
    await page.goto('/')
    await loginPage.login(page, username, password)
})

test("Add two products to the cart and verify that the cart count updates", async ({page}) => {  
    await page.locator(productPage.backpackAddToCartButton).click()
    await page.locator(productPage.bikeAddToCartButton).click()
    await expect(page.locator(productPage.basketIcon)).toContainText("2")
    await productPage.clickBasket(page)
    await productPage.verifyBasketCount(page,2)
    await expect(page.locator(productPage.basketItem, {hasText: "Sauce Labs Bike Light"})).toBeVisible()
    await expect(page.locator(productPage.basketItem, {hasText: "Sauce Labs Backpack"})).toBeVisible()
})

})
