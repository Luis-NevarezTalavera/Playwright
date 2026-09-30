// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class HangfireOverviewPage {
  readonly page: Page;

  readonly overviewLink: Locator;
  readonly jobsLink: Locator;
  readonly retriesLink: Locator;
  readonly recurringJobsLink: Locator;
  readonly serversLink: Locator;
  readonly backToSiteLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.overviewLink = page.getByRole('link', { name: 'Overview' });
    this.jobsLink = page.getByRole('link', { name: /^Jobs/i });
    this.retriesLink = page.getByRole('link', { name: /^Retries/i });
    this.recurringJobsLink = page.getByRole('link', { name: /Recurring Jobs/i });
    this.serversLink = page.getByRole('link', { name: /^Servers/i });

    this.backToSiteLink = page.getByRole('link', { name: /Back to site/i });
  }

  async goto(baseUrl: string): Promise<void> {
    await this.page.goto(`${baseUrl}/hangfire`);
    await this.waitForPageLoaded();
  }

  async waitForPageLoaded(): Promise<void> {
    await expect(this.overviewLink).toBeVisible();
    await expect(this.page.getByText('Hangfire')).toBeVisible();
  }

  async clickJobs(): Promise<void> {
    await this.jobsLink.click();
  }

  async clickRetries(): Promise<void> {
    await this.retriesLink.click();
  }

  async clickRecurringJobs(): Promise<void> {
    await this.recurringJobsLink.click();
  }

  async clickServers(): Promise<void> {
    await this.serversLink.click();
  }

  async navigateBackToSite(): Promise<void> {
    await this.backToSiteLink.click();
  }

  async validateDashboardLoaded(): Promise<void> {
    await expect(this.page.getByText('Schema Version')).toBeVisible();
    await expect(this.page.getByText('Active Connections')).toBeVisible();
    await expect(this.page.getByText('Total Connections')).toBeVisible();
    await expect(this.page.getByText('Active Transactions')).toBeVisible();
  }

  async validateStatisticsDisplayed(): Promise<void> {
    await expect(this.jobsLink).toContainText('Jobs');
    await expect(this.retriesLink).toContainText('Retries');
    await expect(this.recurringJobsLink).toContainText('Recurring Jobs');
    await expect(this.serversLink).toContainText('Servers');
  }
}