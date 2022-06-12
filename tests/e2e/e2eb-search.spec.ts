import { test, expect } from '@playwright/test'
import { LoginPage } from '../e2e/LoginPage';

test.describe("search flow POM", () => {
    test('Seraching results', async ({ page }) =>{
        let loginPage: LoginPage = new LoginPage(page)
        await loginPage.visit()
        await loginPage.searchFor('credit')
        await loginPage.assertSearchSuccess()
    })
})