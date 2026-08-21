import { test, expect } from '@playwright/test';
import { AdminLookupAnsweredSurveysCurrentMonthPage } from './page-objects/AdminLookupAnsweredSurveysCurrentMonth.pom';

test.describe('Admin Current Month User Lookup', () => {
  let lookupPage: AdminLookupAnsweredSurveysCurrentMonthPage;

  test.beforeEach(async ({ page }) => {
    lookupPage = new AdminLookupAnsweredSurveysCurrentMonthPage(page);

    await page.goto(
      'https://grs-dev.bbrownretapps.com/support/AdminLookupAnsweredSurveysCurrentMonth'
    );
  });

  test('should require employee email', async () => {
    await lookupPage.validateRequiredEmail();
  });

  test('should validate email format', async () => {
    await lookupPage.validateInvalidEmailFormat();
  });

  test('should lookup employee survey status', async () => {
    await lookupPage.lookupEmployee('test.user@bbrown.com');

    // Update with actual expected result element
    await expect(lookupPage.page).toHaveURL(/AdminLookupAnsweredSurveysCurrentMonth/);
  });

  test('should accept valid email address', async () => {
    await lookupPage.validateEmailAccepted('test.user@bbrown.com');
  });

  test('should navigate to next question when available', async () => {
    await lookupPage.goToNextQuestion();
  });
});