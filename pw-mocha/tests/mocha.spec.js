const { chromium } = require("playwright")
const expect = require("chai").expect

let browser
let page

before(async () => {
    browser = await chromium.launch()
})

after(async () => {
   await browser.close()
})

beforeEach(async () => {
    page = await browser.newPage()
})

afterEach(async () => {
    await page.close()
})

it('Test with playwright and mocha', async () =>{
    await page.goto('http://example.com')
    expect('h1').to.exist
})