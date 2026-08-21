import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('luis.talavera@bbrown.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('Aleluya001!@#$');
  await page.locator('#i0118').press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://login.microsoftonline.com/common/SAS/ProcessAuth');
  await page.getByRole('button', { name: 'Switch Edge profile' }).click();

  
});