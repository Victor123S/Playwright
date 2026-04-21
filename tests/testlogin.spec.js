import{ expect, test } from '@playwright/test'
test ('Login', async({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('//input[@id="username"]').fill('student')
    await page.locator('//input[@id="password"]').fill('Password123')
    await page.locator('//button[text()="Submit"]').click()
    const title=await page.title()
    console.log(title)
    await expect(title).toContain('Logged In Successfully')
})