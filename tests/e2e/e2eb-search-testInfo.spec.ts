import { test, expect } from '@playwright/test'
import { LoginPage } from '../e2e/LoginPage';
import { getRandomNumber, getRandomString } from '../../utils/data-helpers'

test.describe.only("search flow POM", () => {
    test.only('Seraching results', async ({ page }, testInfo) =>{
        let loginPage: LoginPage = new LoginPage(page)
        let newNumber = await getRandomNumber
        let newString = await getRandomString
        await loginPage.visit()
        await loginPage.searchFor('credit')
        await loginPage.assertSearchSuccess()
        console.log(testInfo.title)
        console.log(testInfo.status)
        
        console.log(newNumber)
        console.log(newString)
    })
})