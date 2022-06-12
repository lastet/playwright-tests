import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/LoginPage';
 
test.describe('Login to Account', () => {
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page)
    await loginPage.visit()
    await loginPage.login('username','password')

    
    })
    
    test('Transfer funds', async ({ page }) => {
      // to avoid ERR_SSL_VERSION_OR_CIPHER_MISMATCH
        await page.waitForTimeout(5000)
        await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
        await page.selectOption('#tf_fromAccountId','3')
        await page.selectOption('#tf_toAccountId','4')
        await page.type('#tf_amount', '265')
        await page.type('#tf_description', 'Credit payment')
        await page.click('#btn_submit')
        await page.pause()
        await page.click('.btn-primary')

        const success = await page.locator('.alert-success')
        await expect(success).toBeVisible()
        await page.pause()
        })


})
