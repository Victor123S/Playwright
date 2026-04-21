import { test } from '@playwright/test'
test('Windows handling',async({ browser }) => {
    const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@title="Search for Products, Brands and More"])[1]').fill('i phone17 pro')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
    const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('(//div[@class="RG5Slk"])[1]')
    ])
await newPage.waitForLoadState()
const title =await newPage.title()
console.log(title)
})