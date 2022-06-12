import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/LoginPage';
import { FeedbackPage  } from '../e2e/FeedbackPage';


test.describe('Feedback check', () => {
    let loginPage: LoginPage
    let feedbackPage: FeedbackPage

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        feedbackPage = new FeedbackPage(page)

        await loginPage.visit()
        await loginPage.feedbackClick()
    })

    test('Reset feedback form', async ({page}) =>{
        await feedbackPage.fillForm(
            'name',
            'email@email.com',
            'subject',
            'luvluvluv'
        )
    await feedbackPage.resetForm()
    await feedbackPage.assertReset()
    })

    test('Submit feedback form', async ({page}) =>{
        await feedbackPage.fillForm(
            'name',
            'email@email.com',
            'subject',
            'luvluvluv'
        )
    await feedbackPage.submitForm()
    await feedbackPage.feedbackFormSent()
    })

})