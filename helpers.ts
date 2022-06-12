export async function loadHomepage(page) {
    await page.goto('https://example.com')
}
export async function assrtTitle(page) {
    await page.waitForSelector('h1')
}
