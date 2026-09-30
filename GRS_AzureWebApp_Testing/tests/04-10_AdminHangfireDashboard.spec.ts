import { test, expect } from '@playwright/test';
import { HangfireOverviewPage } from './page-objects/AdminHangfireOverview.pom';

test.describe('Hangfire Dashboard', () => {
  let dashboard: HangfireOverviewPage;

  test.beforeEach(async ({ page }) => {
    dashboard = new HangfireOverviewPage(page);

    await dashboard.goto(process.env.BASE_URL!);
  });

  test('should load overview dashboard', async () => {
    await dashboard.validateDashboardLoaded();
    await dashboard.validateStatisticsDisplayed();
  });

  test('should navigate to jobs', async ({ page }) => {
    await dashboard.clickJobs();

    await expect(page).toHaveURL(/jobs/i);
  });

  test('should navigate back to application', async ({ page }) => {
    await dashboard.navigateBackToSite();

    await expect(page).not.toHaveURL(/hangfire/i);
  });
});