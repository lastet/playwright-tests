import { test, expect } from '@playwright/test'

test.describe("search flow", () => {
    test('Seraching results', async ({ page }) =>{
      await  page.goto("http://zero.webappsecurity.com/")
       await page.type('#searchTerm','credit')
        await page.keyboard.press('Enter')

    const success = await page.locator('text=Search Results:')
    await expect(success).toBeVisible()
    })
})