import { test } from '@playwright/test';
import { GenerateReportPage } from './page-objects/AdminLeadershipReports.pom';

test('send leadership report for profit center', async ({ page }) => {
  const reportPage = new GenerateReportPage(page);

  await reportPage.goto();

  await reportPage.searchProfitCenter('033');
  await reportPage.verifyProfitCenterVisible('033');

  await reportPage.sendLeadershipReport('033');
});