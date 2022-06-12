import { expect, Locator, Page  } from "@playwright/test";

export class FeedbackPage {
    readonly page: Page
    readonly nameInput: Locator
    readonly emailInput: Locator
    readonly subjInput: Locator
    readonly commentBtn: Locator
    readonly clearMessage: Locator
    readonly submitBtn: Locator
    readonly feedbackTtl: Locator


constructor(page: Page) {
    this.page = page
        this.nameInput = page.locator('#name')
        this.emailInput = page.locator('#email')
        this.subjInput = page.locator('#subject')
        this.commentBtn = page.locator('#comment')
        this.clearMessage = page.locator("input[name='clear']")
        this.submitBtn = page.locator("input[type='submit']")
        this.feedbackTtl = page.locator('#feedback-title')
     }


async fillForm(
    name: string,
    email: string,
    subject: string,
    comment: string,
    ){
    await this.nameInput.type(name)
    await this.emailInput.type(email)
    await this.subjInput.type(subject)
    await this.commentBtn.type(comment)
    }

async resetForm(){
    await this.clearMessage.click()
    }

async submitForm(){
    await this.submitBtn.click()
}
async assertReset() {
    await expect(this.nameInput).toBeEmpty()
    await expect(this.commentBtn).toBeEmpty()
  }

  async feedbackFormSent() {
    await expect(this.feedbackTtl).toBeVisible()
  }
}