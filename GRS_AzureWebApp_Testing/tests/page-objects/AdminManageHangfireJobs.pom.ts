// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

// pages/manage-hangfire-jobs.page.ts

import { expect, Locator, Page } from '@playwright/test';

export class ManageHangfireJobsPage {
  readonly page: Page;

  // Page actions
  readonly initializeAllJobsButton: Locator;
  readonly openHangfireDashboardButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.initializeAllJobsButton = page.getByRole('button', {
      name: /initialize all jobs/i,
    });

    this.openHangfireDashboardButton = page.getByRole('button', {
      name: /open hangfire dashboard/i,
    });
  }

  async goto() {
    await this.page.goto('/support/ManageHangfireJobs');
  }

  async validatePageLoaded() {
    await expect(
      this.page.getByRole('heading', {
        name: /manage hangfire jobs/i,
      })
    ).toBeVisible();
  }

  async clickInitializeAllJobs() {
    await this.initializeAllJobsButton.click();
  }

  async openHangfireDashboard() {
    await this.openHangfireDashboardButton.click();
  }

  /**
   * Returns the table row for a specific job.
   */
  getJobRow(jobName: string): Locator {
    return this.page.getByRole('row').filter({
      hasText: jobName,
    });
  }

  async runJobNow(jobName: string) {
    const row = this.getJobRow(jobName);

    await row.getByRole('button', {
      name: /run now/i,
    }).click();
  }

  async pauseJob(jobName: string) {
    const row = this.getJobRow(jobName);

    await row.getByRole('button', {
      name: /pause/i,
    }).click();
  }

  async resumeJob(jobName: string) {
    const row = this.getJobRow(jobName);

    await row.getByRole('button', {
      name: /resume/i,
    }).click();
  }

  async createJob(jobName: string) {
    const row = this.getJobRow(jobName);

    await row.getByRole('button', {
      name: /create/i,
    }).click();
  }

  async verifyJobExists(jobName: string) {
    await expect(this.getJobRow(jobName)).toBeVisible();
  }

  async verifyJobStatus(jobName: string, expectedStatus: string) {
    const row = this.getJobRow(jobName);

    await expect(row).toContainText(expectedStatus);
  }

  async verifyNextExecutionPresent(jobName: string) {
    const row = this.getJobRow(jobName);

    await expect(row).not.toContainText('N/A');
  }

  /**
   * Navigation to next job/question in the table.
   * Useful when processing jobs sequentially.
   */
  async navigateToNextJob(currentJobName: string): Promise<Locator> {
    const rows = this.page.getByRole('row');

    const currentRow = rows.filter({
      hasText: currentJobName,
    });

    const currentIndex = await currentRow.evaluate((node) => {
      const rows = Array.from(
        node.parentElement?.children ?? []
      );
      return rows.indexOf(node);
    });

    return rows.nth(currentIndex + 1);
  }

  /**
   * Validation for required controls.
   */
  async validateRequiredElements() {
    await expect(this.initializeAllJobsButton).toBeVisible();
    await expect(this.initializeAllJobsButton).toBeEnabled();

    await expect(this.openHangfireDashboardButton).toBeVisible();
    await expect(this.openHangfireDashboardButton).toBeEnabled();

    await expect(
      this.page.getByRole('table')
    ).toBeVisible();
  }
}