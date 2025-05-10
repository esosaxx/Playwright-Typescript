import {test, expect} from '@playwright/test'
import { loginPage } from '../pages/loginPage'
import { productPage } from '../pages/productPage'
import { checkoutDetailsPage } from '../pages/checkoutDetailsPage'
import { checkoutOverviewPage } from '../pages/checkoutOverviewPage'
import { checkoutConfirmedPage } from '../pages/checkoutConfirmedPage'
import { guestDetails } from '../testData/guestDetails'
import { loginCredentials } from '../testData/loginData'

const {username, password} = loginCredentials;
const {firstName, lastName, postcode} = guestDetails;

test.describe("Checkout", () => {
    test.beforeEach("login", async({page}) => {
        await page.goto('/')
        await loginPage.login(page, username, password)
    })

    test("Complete the checkout process successfully", async ({page}) => {

        await page.locator(productPage.backpackAddToCartButton).click()
        await page.locator(productPage.bikeAddToCartButton).click()
        await productPage.clickBasket(page)
        await productPage.clickCheckoutButton(page)
        await page.locator(checkoutDetailsPage.firstName).fill(firstName)
        await page.locator(checkoutDetailsPage.lastName).fill(lastName)
        await page.locator(checkoutDetailsPage.postalCode).fill(postcode)
        await checkoutDetailsPage.clickContinueButton(page)
        await checkoutOverviewPage.clickFinishButton(page)
    
        //verify successfull checkout 
        await expect(page.locator(checkoutConfirmedPage.title)).toHaveText("Checkout: Complete!")
        await expect(page.locator(checkoutConfirmedPage.header)).toHaveText("Thank you for your order!")
        await expect(page.locator(checkoutConfirmedPage.completionText)).toHaveText("Your order has been dispatched, and will arrive just as fast as the pony can get there!")
    })
})
