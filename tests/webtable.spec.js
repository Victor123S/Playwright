import { test,expect } from '@playwright/test'
test('Webtable', async ({ page }) => {
await page.goto('https://qavbox.github.io/demo/webtable/')
const rowData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td').allTextContents()
console.log(rowData)
await expect(rowData).toEqual(['Tiger Nixon',
  'System Architect',
  'Edinburgh',
  '61',
  '2011/04/25',
  '$320,800'])
const clmData = await page.locator('//table[@id="table02"]//tbody//tr[1]//td[3]').allTextContents()
console.log(clmData)
await expect(clmData).toContain('Edinburgh')

const testData = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[4]').textContent()
console.log(testData)
await expect(testData).toEqual('66')

})
