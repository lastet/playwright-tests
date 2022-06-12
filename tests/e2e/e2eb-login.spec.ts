
import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';


test.describe("login / logout flow", () => {
    let loginPage: LoginPage

//Before hook
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)

     await loginPage.visit()
     await loginPage.wait(3000)
})

test('Negative Scenario for login', async ({ page }) => {

    await loginPage.login('notusername','notpassword')
    await loginPage.wait(1000)
    await loginPage.assertErrorMessage()

    })
})
