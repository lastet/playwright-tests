import { expect, Locator, Page } from "@playwright/test";
import { TimePage } from "./page-objects/componenets/TimePage";


export class LoginPage extends TimePage {

    //Define Selectors
    
    readonly loginButton: Locator
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator
    readonly searchBox: Locator
    readonly searchResults: Locator
    readonly feedbackBtn: Locator
    
    // Init selectors using constructor
    constructor(page: Page) {
    super(page)
    this.loginButton = page.locator('#signin_button')
    this.usernameInput = page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
    this.searchBox = page.locator('#searchTerm')
    this.searchResults = page.locator('text=Search Results:')
    this.feedbackBtn = page.locator('#feedback')
     }

    //Define login page methods
    async visit(){
        
        await this.page.goto('http://zero.webappsecurity.com/')
     
    }

    async login(username: string, password: string) {
        await this.loginButton.click()
        await this.usernameInput.type('username')
        await this.passwordInput.type('password')
        await this.submitButton.click()
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText('Login and/or password are wrong.')
    }

    async searchFor(item: string) {
        await this.searchBox.type(item)
        await this.page.keyboard.press('Enter')
    }

    async assertSearchSuccess() {
        await expect(this.searchResults).toBeVisible()
    }

    async feedbackClick() {
        await this.feedbackBtn.click()
    }
}