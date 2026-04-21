import { test } from '@playwright/test'
test('Dropdown', async({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForTimeout(3000)
//Checkbox
await page.check('//input[@id="sunday"]')
await page.check('//input[@id="saturday"]')
//singleDropdown
const singleDropDown=await page.locator('//select[@id="colors"]')
await singleDropDown.selectOption({index : 0 })
await page.waitForTimeout(1000)
//multiDropdown
const multidrp=await page.locator('//select[@id="animals"]')
await multidrp.selectOption([{value : "cheetah"} , {value : "deer"}])
await page.waitForTimeout(2000)
})