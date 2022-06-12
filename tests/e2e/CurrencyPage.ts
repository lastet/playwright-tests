import { expect, Locator, Page  } from "@playwright/test";

export class CurrencyPage {
    readonly page: Page
    readonly foreignCur: Locator
    readonly selectOption: Locator
    readonly amount: Locator
    readonly dollarRadio: Locator
    readonly calculate: Locator
    readonly totalAmount: Locator
    readonly purchaseBtn: Locator
    readonly succsessAlert: Locator


constructor(page: Page) {
    this.page = page
        this.foreignCur = page.locator('text=Purchase Foreign Currency')
        this.selectOption = page.locator('#pc_currency')
        this.amount = page.locator('#pc_amount')
        this.dollarRadio = page.locator('#pc_inDollars_true')
        this.calculate = page.locator('#pc_calculate_costs')
        this.totalAmount = page.locator("#pc_conversion_amount")
        this.purchaseBtn = page.locator("#purchase_cash")
        this.succsessAlert = page.locator('#alert_content')
     }


    //navigate thru Navbar
    async createCase(){
        await this.foreignCur.click()
        await this.selectOption.selectOption('CHF')
        await this.amount.type('5000')
        await this.dollarRadio.click()
        await this.calculate.click()
        await expect(this.totalAmount).toBeVisible()
        await this.purchaseBtn.click()



    }
    async conversionSuccess() {
        await expect(this.succsessAlert).toBeVisible()
    }

}