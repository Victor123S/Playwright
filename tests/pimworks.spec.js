import { test, expect } from '@playwright/test';

test('PIMWORKS Login Test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://sandbox.pimworks.io/PIMWorks_QA');

  // Wait for page to load
  await expect(page.locator('text=Welcome back!')).toBeVisible();

  // Enter Work Email
  await page.fill('input[placeholder="Enter your work Email"]', 'piwteam_testing961@mobiusservices.co.in');

  // Enter Password
  await page.fill('input[placeholder="Enter your password"]', 'Mobius@123');

  // Click Login button
  await page.click('button:has-text("Login")');

  // Wait for navigation or dashboard element
  // Adjust selector based on what appears after login
  await page.waitForLoadState('networkidle');

  // Example validation (update selector accordingly)
  await expect(page).not.toHaveURL(/.*login.*/);
});