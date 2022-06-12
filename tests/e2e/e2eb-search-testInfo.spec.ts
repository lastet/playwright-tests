import { test, expect } from '@playwright/test'
import { LoginPage } from '../e2e/LoginPage';

test.describe.only("search flow POM", () => {
    test('Seraching results', async ({ page }, testInfo) =>{
        let loginPage: LoginPage = new LoginPage(page)
        await loginPage.visit()
        await loginPage.searchFor('credit')
        await loginPage.assertSearchSuccess()
        console.log(testInfo.title)
        console.log(testInfo.status)
    })
})