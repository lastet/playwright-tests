import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/LoginPage';
import { Navbar } from '../e2e/page-objects/componenets/Navbar';
import { CurrencyPage } from '../e2e/CurrencyPage';
import { PaymentPage } from '../e2e/page-objects/componenets/PaymentPage' ;


test.describe.only('Login to Account', () => {
  let loginPage: LoginPage
  let navbar: Navbar
  let currencyPage: CurrencyPage
  let paymentPage: PaymentPage

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page)
    navbar = new Navbar(page)
    currencyPage = new CurrencyPage(page)
    paymentPage = new PaymentPage(page)

    await loginPage.visit()
    await loginPage.login('username','password')
  })

    test('Go to payments & purchase currency', async ({ page }) => {
       
        await paymentPage.accountLink()
        navbar.clickOnTab('Pay Bills')
        await currencyPage.createCase()
        await currencyPage.conversionSuccess()
    })
    
})