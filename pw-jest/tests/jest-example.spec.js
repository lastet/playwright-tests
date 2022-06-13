const { chromium } = require('playwright')
const { expect } = require('@jest/globals');
//const expect = require('expect')

let browser
let page

beforeAll(async () => {
    browser = await chromium.launch()
})

afterAll(async () => {
    await browser.close()
})

beforeEach(async () => {
    page = await browser.newPage()
})

afterEach(async () => {
    await page.close()
})

it('Jest Test with playwright', async () =>{
    await page.goto('https://www.example.com')
    expect(await page.title()).toBe('Example Domain')
})

//npm run test