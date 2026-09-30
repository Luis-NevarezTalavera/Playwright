import { test } from '@playwright/test';
import { LeadershipReportsPage } from './page-objects/LeadershipReports.pom';

test('Send Leadership Report', async ({ page }) => {
  const leadershipReportPage = new LeadershipReportsPage(page);

  await leadershipReportPage.goto();
  await leadershipReportPage.verifyPageLoaded();

  await leadershipReportPage.verifyProfitCenter('621');
  await leadershipReportPage.sendLeadershipReport();
});