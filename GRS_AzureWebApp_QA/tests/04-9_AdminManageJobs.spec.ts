// tests/manage-hangfire-jobs.spec.ts

import { test, expect } from '@playwright/test';
import { ManageHangfireJobsPage } from './page-objects/AdminManageHangfireJobs.pom';

test.describe('Manage Hangfire Jobs', () => {
  let hangfirePage: ManageHangfireJobsPage;

  test.beforeEach(async ({ page }) => {
    hangfirePage = new ManageHangfireJobsPage(page);

    await hangfirePage.goto();
    await hangfirePage.validatePageLoaded();
  });

  test('should validate required page controls', async () => {
    await hangfirePage.validateRequiredElements();
  });

  test('should verify Send Initial Survey job exists', async () => {
    await hangfirePage.verifyJobExists('Send Initial Survey');
  });

  test('should execute Send Initial Survey job', async () => {
    await hangfirePage.runJobNow('Send Initial Survey');

    // Add toast/message assertion if available
  });

  test('should initialize all jobs', async () => {
    await hangfirePage.clickInitializeAllJobs();

    // Validate success notification if present
  });

  test('should navigate through jobs sequentially', async () => {
    const nextJob = await hangfirePage.navigateToNextJob(
      'Send Initial Survey'
    );

    await expect(nextJob).toContainText(
      'Send Reminder Survey'
    );
  });

  test('should validate all configured jobs are present', async () => {
    const jobs = [
      'Send Initial Survey',
      'Send Reminder Survey',
      'Send Reminder Survey with Leadership',
      'Send Reports to IOL',
    ];

    for (const job of jobs) {
      await hangfirePage.verifyJobExists(job);
    }
  });
});