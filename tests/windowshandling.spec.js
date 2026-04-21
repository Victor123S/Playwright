import { test } from '@playwright/test'
test('Windows handling', async({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17pro')
    await page.keyboard.press('Enter')
    await page.waitForTimeout(3000)
    
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click('//h2[text()="Results"]//ancestor::div[@data-cel-widget="search_result_1"]//following-sibling::div[@data-asin="B0FQFYYPZF"]')
    ])
    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)

})
