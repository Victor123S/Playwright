import {expect, test} from '@playwright/test'
test('insta login',async({page})=> {
await page.goto('https://www.instagram.com/?hl=en')
await page.locator('//input[@name="email"]').fill('spsfrank15@gmail.com')
await page.locator('//input[@type="password"]').fill('spssandfamily123')
await page.locator('//span[text()="Log in"]').click()
const title=await page.title()
console.log(title)
await expect(title).toContain('Instagram')
})
