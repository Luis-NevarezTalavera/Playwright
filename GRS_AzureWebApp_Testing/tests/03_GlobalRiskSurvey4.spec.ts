import { test, expect } from '@playwright/test';
import { IncidentReportPage } from './page-objects/GlobalRiskSurvey4.pom';

test.describe('Insurance Operations Incident Report', () => {
  let incidentReportPage: IncidentReportPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(
      'https://grs-dev.bbrownretapps.com/survey/{surveyId}/{responseId}'
    );

    incidentReportPage = new IncidentReportPage(page);
  });

  test('should complete incident report successfully', async () => {
    await incidentReportPage.enterText(
      incidentReportPage.positionField,
      'Software Engineer'
    );

    await incidentReportPage.enterText(
      incidentReportPage.contactField,
      'Luis Talavera'
    );

    await incidentReportPage.enterText(
      incidentReportPage.accountNameField,
      'ABC Construction'
    );

    await incidentReportPage.setAcquiredBusiness(true);

    await incidentReportPage.enterText(
      incidentReportPage.acquiredEntityNameField,
      'XYZ Insurance'
    );

    await incidentReportPage.enterText(
      incidentReportPage.dealTypeField,
      'Asset Purchase'
    );

    await incidentReportPage.selectCauseOfLoss(
      'Exposure Analysis'
    );

    await incidentReportPage.enterDescription(
      'Customer reported incorrect policy information during renewal.'
    );

    await incidentReportPage.enterActionTaken(
      'Reviewed policy and corrected coverage details.'
    );

    await incidentReportPage.enterSuggestions(
      'Add automated policy review checklist.'
    );

    await incidentReportPage.clickNext();

    await expect(
      incidentReportPage.page
    ).toHaveURL(/confirmation|success/i);
  });

  test('should validate required fields', async () => {
    await incidentReportPage.clickNext();

    await incidentReportPage.expectValidationMessage(
      'This field is required'
    );
  });

  test('should navigate between survey pages', async () => {
    await incidentReportPage.clickPrevious();

    await expect(
      incidentReportPage.page
    ).toHaveURL(/page=3/i);

    await incidentReportPage.clickNext();

    await expect(
      incidentReportPage.page
    ).toHaveURL(/page=4/i);
  });
});