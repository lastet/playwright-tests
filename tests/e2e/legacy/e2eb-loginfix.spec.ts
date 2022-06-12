//npx playwright test --config=e2e.config.ts --headed --project=C

import { test, expect } from '@playwright/test'
 
test.describe('Login to Account', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#signin_button')
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click('text=Sign in')
    })
    test('Wait for timeout', async ({ page }) => {
    // to avoid ERR_SSL_VERSION_OR_CIPHER_MISMATCH
    await page.waitForTimeout(5000)
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
    await page.pause()
    })
})
