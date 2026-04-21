import { expect , test } from "@playwright/test"
test ('Frame Handling', async({page}) => {
  await page.goto('https://vinothqaacademy.com/iframe/')
  var singleframe = await page.frameLocator('//iframe[@title="Web Table"]')
  await singleframe.locator('//input[@id="nameInput"]').fill('Victor')
  await singleframe.locator('//input[@id="roleInput"]').fill('123')
  await singleframe.locator('(//input[@type="checkbox"])[1]').check()
  var singleframe = await page.title()
  console.log(singleframe)
  await expect(singleframe).toContain('Project Details')
})