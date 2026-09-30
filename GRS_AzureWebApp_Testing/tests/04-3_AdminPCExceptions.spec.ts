// tests/profit-center-exceptions.spec.ts

import { test, expect } from '@playwright/test';
import { ProfitCenterExceptionsPage } from './page-objects/AdminPCExceptions.pom';
import { ProfitCenterExceptionFormPage } from './page-objects/AdminPCExceptionsEdit.pom';

test.describe('Profit Center Exceptions', () => {

  test('should search for profit center', async ({ page }) => {
    const exceptionsPage =
      new ProfitCenterExceptionsPage(page);

    await exceptionsPage.goto();

    await exceptionsPage.searchProfitCenter('083');

    await exceptionsPage.verifyProfitCenterExists('083');
  });

  test('should navigate to next page', async ({ page }) => {
    const exceptionsPage =
      new ProfitCenterExceptionsPage(page);

    await exceptionsPage.goto();

    await exceptionsPage.goToNextPage();

    await expect(page).toHaveURL(/ListExceptions/i);
  });

  test('should open edit screen', async ({ page }) => {
    const exceptionsPage =
      new ProfitCenterExceptionsPage(page);

    await exceptionsPage.goto();

    await exceptionsPage.clickEditForProfitCenter('083');

    await expect(page).toHaveURL(/Edit/i);
  });

  test('should validate required fields', async ({ page }) => {
    const exceptionsPage =
      new ProfitCenterExceptionsPage(page);

    await exceptionsPage.goto();
    await exceptionsPage.clickCreateNewException();

    const formPage =
      new ProfitCenterExceptionFormPage(page);

    await formPage.saveEmptyForm();

    await formPage.validateRequiredFields();
  });

  test('should create new exception', async ({ page }) => {
    const exceptionsPage =
      new ProfitCenterExceptionsPage(page);

    await exceptionsPage.goto();
    await exceptionsPage.clickCreateNewException();

    const formPage =
      new ProfitCenterExceptionFormPage(page);

    await formPage.createException(
      '999',
      'USD',
      '01/01/2060'
    );

    await expect(
      page.getByText(/success/i)
    ).toBeVisible();
  });
});