import { test, expect } from '@playwright/test';
import { AdminAddUserCurrentMonthPage } from './page-objects/AdminAddUserForCurrentMonth.pom';

test.describe('Admin Add User For Current Month', () => {
  test('should create a survey user', async ({ page }) => {
    const addUserPage = new AdminAddUserCurrentMonthPage(page);

    await addUserPage.goto();
    await addUserPage.verifyPageLoaded();

    await addUserPage.createUser(
      'Playwright Test User',
      '1001',
      'playwright.test@bbrown.com'
    );

    await expect(page).not.toHaveURL(
      /error/i
    );
  });

  test('should validate required fields', async ({ page }) => {
    const addUserPage = new AdminAddUserCurrentMonthPage(page);

    await addUserPage.goto();
    await addUserPage.verifyPageLoaded();

    await addUserPage.validateRequiredFields();
  });

  test('should require email', async ({ page }) => {
    const addUserPage = new AdminAddUserCurrentMonthPage(page);

    await addUserPage.goto();
    await addUserPage.verifyPageLoaded();

    await addUserPage.validateRequiredEmail();
  });
});
