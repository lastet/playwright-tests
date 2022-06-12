import { expect, Locator, Page } from "@playwright/test";   


export class PaymentPage {
    readonly page: Page
    readonly paySelBox: Locator
    readonly payDetailBtn: Locator
    readonly payDetail: Locator
    readonly accSelBox: Locator
    readonly amountInput: Locator
    readonly dateInput: Locator
    readonly descriptionInput: Locator
    readonly smbtPayBtn: Locator
    readonly msg: Locator

constructor(page: Page) {
    this.page = page
    this.paySelBox = page.locator('#sp_payee')
    this.payDetailBtn = page.locator('#sp_get_payee_details')
    this.payDetail = page.locator('#sp_payee_details')
    this.accSelBox = page.locator('#sp_account')
    this.amountInput = page.locator('#sp_amount')
    this.dateInput = page.locator('#sp_date')
    this.descriptionInput = page.locator('#sp_description')
    this.smbtPayBtn = page.locator('#pay_saved_payees')
    this.msg = page.locator('#alert_content > span')
    }

async accountLink() {
    // to avoid ERR_SSL_VERSION_OR_CIPHER_MISMATCH
    await this.page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    await this.page.waitForTimeout(5000)
}

async createPayment() {
    await this.paySelBox.selectOption('bofa')
    await this.payDetailBtn.click()
    await expect(this.payDetail).toBeVisible()
    await this.accSelBox.selectOption('6')
    await this.amountInput.type('1500')
    await this.dateInput.type('2022-06-11')
    await this.descriptionInput.type('luvluvluv')
    await this.smbtPayBtn.click()
    }

async assertSuccess() {
    await expect(this.msg).toBeVisible()
}

}