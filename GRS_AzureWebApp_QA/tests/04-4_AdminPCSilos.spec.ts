// tests/ProfitCenterSilos.spec.ts

import { test, expect } from '@playwright/test';
import { ProfitCenterSilosPage } from './page-objects/AdminPCSilos.pom';

test.describe('Profit Center Silos', () => {
  let profitCenterPage: ProfitCenterSilosPage;

  test.beforeEach(async ({ page }) => {
    profitCenterPage = new ProfitCenterSilosPage(page);

    await profitCenterPage.goto();
    await profitCenterPage.verifyPageLoaded();
  });

  test('should display profit center table', async () => {
    await profitCenterPage.verifyTableVisible();
  });

  test('should search for Corp-B. Brown', async () => {
    await profitCenterPage.searchProfitCenter('Corp-B. Brown');

    await profitCenterPage.verifySearchResultsContain(
      'Corp-B. Brown'
    );
  });

  test('should navigate to next page', async () => {
    await profitCenterPage.clickNextPage();

    await expect(
      profitCenterPage.page.getByText('Showing')
    ).toBeVisible();
  });

  test('should navigate back to previous page', async () => {
    await profitCenterPage.clickNextPage();
    await profitCenterPage.clickPreviousPage();

    await expect(
      profitCenterPage.page.getByText('Showing')
    ).toBeVisible();
  });

  test('should verify known profit center exists', async () => {
    await profitCenterPage.verifyProfitCenterExists(
      'Corp-Retail'
    );
  });
});