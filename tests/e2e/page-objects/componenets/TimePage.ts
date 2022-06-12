import { Page } from "@playwright/test"

export class TimePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

async wait(time) {
    await this.page.waitForTimeout(time)
    }

}