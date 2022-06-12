import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/LoginPage';
import { Navbar } from '../e2e/page-objects/componenets/Navbar';
import { PaymentPage } from '../e2e/page-objects/componenets/PaymentPage' ;



test.describe('Login to Account', () => {
  let loginPage: LoginPage
  let navbar: Navbar
  let paymentPage: PaymentPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    navbar = new Navbar(page)
    paymentPage = new PaymentPage(page)
    

    await loginPage.visit()
    await loginPage.login('username','password')
  })
    test('Go to payments & submit payment', async ({ page }) => {  
      
       await paymentPage.accountLink()
       navbar.clickOnTab('Pay Bills')

       await paymentPage.createPayment()
       await paymentPage.assertSuccess()
       
    })
})