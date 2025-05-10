import {test} from '@playwright/test'
import { loginPage } from '../pages/loginPage'
import { productPage } from '../pages/productPage'
import { loginCredentials } from '../testData/loginData'
import dotenv from 'dotenv';
const {username, password} = loginCredentials;


test("Verify users can login successfully with valid credentials", async ({page}) => {
    await page.goto("https://www.saucedemo.com")
    await loginPage.verifyTitle(page)
    await loginPage.login(page, username, password)
    await productPage.verifyTitle(page)
})