// tests/admin-current-month-links.spec.ts

import { test, expect } from '@playwright/test';
import { AdminCurrentMonthLinksPage } from './page-objects/AdminCurrentMonthLinks.pom';

test.describe('Admin Current Month Links', () => {
  test('should display empty results message', async ({ page }) => {
    const adminPage = new AdminCurrentMonthLinksPage(page);

    await adminPage.goto();

    await adminPage.verifyTableVisible();
    await adminPage.verifyNoDataDisplayed();
  });

  test('should search records', async ({ page }) => {
    const adminPage = new AdminCurrentMonthLinksPage(page);

    await adminPage.goto();

    await adminPage.search('test@example.com');

    await expect(adminPage.searchBox).toHaveValue(
      'test@example.com'
    );
  });

  test('should navigate pagination', async ({ page }) => {
    const adminPage = new AdminCurrentMonthLinksPage(page);

    await adminPage.goto();

    await adminPage.goToNextPage();
  });
});