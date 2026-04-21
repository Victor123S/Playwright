import { test } from '@playwright/test'
test ('Alert Handling',async ({page})=> {
await page.goto("https://testautomationpractice.blogspot.com/")
//Simple alert
await page.once('dialog', async (dialog) => {
await console.log('Simple Alert :',dialog.message( ))
await dialog.accept();
});
await page.locator('//button[@id="alertBtn"]').click()

await page.once('dialog', async (dialog) => {
await console.log('Confirmation Alert :',dialog.message( ))
await dialog.dismiss();
})
await page.locator('//button[@id="confirmBtn"]').click()

await page.once('dialog', async (dialog) =>{
await console.log('prompt alert : ',dialog.message())
await dialog.accept('victor')
})
await page.locator('//button[@id="promptBtn"]').click()
await page.waitForTimeout(5000)
}
)

