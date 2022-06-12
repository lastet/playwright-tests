import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/LoginPage';

test.describe('Login to Account', () => {
  let loginPage: LoginPage

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page)
    await loginPage.visit()
    await loginPage.login('username','password')
  })
    test('Timeout for Accs', async ({ page }) =>{
    // to avoid ERR_SSL_VERSION_OR_CIPHER_MISMATCH
    await page.waitForTimeout(5000)
    await page.goto('http://zero.webappsecurity.com/bank/account-activity.html')
    

    await page.selectOption("#aa_accountId",'2')
    const checking = await page.locator('#all_transactions_for_account')
    await expect(checking).toBeVisible()
    

    await page.selectOption("#aa_accountId",'3')
    const savings = await page.locator('#all_transactions_for_account')
    await expect(savings).toBeVisible()

    await page.selectOption("#aa_accountId",'4')
    const loan = await page.locator('#all_transactions_for_account')
    await expect(loan).toBeVisible()
    
    await page.selectOption("#aa_accountId",'5')
    const credit = await page.locator('.well')
    await expect(credit).toBeVisible()

    await page.selectOption("#aa_accountId",'6')
    const brokerage = await page.locator('.well')
    await expect(brokerage).toBeVisible()
    
    })
})