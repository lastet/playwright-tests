import { test, expect } from '@playwright/test'

test.describe("login / logout flow", () => {


//negative signin_button
test('Negative Scenario for login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.type('#user-name','wronglgn')
    await page.type('#password','wrongpass')
    await page.click('#login-button')

    const loginerr = await page.locator('.error-button')
    await expect(loginerr).toBeVisible()
})
//positive and logout
test('Positive for login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.type('#user-name','standard_user')
    await page.type('#password','secret_sauce')
    await page.click('#login-button')

    const loginsuccess = await page.locator('.shopping_cart_link')
    await expect(loginsuccess).toBeVisible()

    await page.goto('https://www.saucedemo.com/inventory.html')
    await page.click('#react-burger-menu-btn')
    await page.click('#logout_sidebar_link')

    const logoutsuccess = await page.locator('.login_wrapper')
    await expect(logoutsuccess).toBeVisible()

    })

})