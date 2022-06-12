import { expect, Locator, Page } from "@playwright/test";

export class Navbar {
    readonly page: Page
    readonly accSummary: Locator
    readonly accActivity: Locator
    readonly transferFund: Locator
    readonly payBills: Locator
    readonly moneyApp: Locator
    readonly onlineStats: Locator

    constructor(page: Page) {
        this.page = page
        this.accSummary = page.locator('#account_summary_tab')
        this.accActivity = page.locator('#account_activity_tab')
        this.transferFund = page.locator('#transfer_funds_tab')
        this.payBills = page.locator('#pay_bills_tab')
        this.moneyApp = page.locator('#money_map_tab')
        this.onlineStats = page.locator('#online_statements_tab')
    }

async clickOnTab(tabName) {
    switch (tabName){

        case 'Account Summary':
        await this.accSummary.click()
        break

        case 'Account Activity':
        await this.accActivity.click()
        break

        case 'Transfer Funds':
        await this.transferFund.click()
        break

        case 'Pay Bills':
        await this.payBills.click()
        break

        case 'My Money App':
        await this.moneyApp.click()
        break

        case 'Online Statements':
        await this.onlineStats.click()
        break   

        default:
            throw new Error('This tab does not exist')

     }
    }
}