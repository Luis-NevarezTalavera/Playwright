// Global Risk Survey, Leadership Resports page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Leadership Resports page

import { Page, Locator, expect } from '@playwright/test';

export class LeadershipReportsPage {
  readonly page: Page;

  // Header
  readonly pageTitle: Locator;

  // User controls
  readonly signedInUser: Locator;
  readonly signOutLink: Locator;

  // Report section
  readonly reportsHeader: Locator;
  readonly instructionsText: Locator;

  // Profit Center table/row
  readonly profitCenterRow: Locator;
  readonly sendLeadershipReportLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByText('Global Risk Survey', { exact: true });

    this.signedInUser = page.getByText('luis.talavera@bbrown.com');
    this.signOutLink = page.getByRole('link', { name: /sign out/i });

    this.reportsHeader = page.getByText('Global Risk Survey Reports');
    this.instructionsText = page.getByText(
      /Please click the link below.*Send Leadership Report Via Email/i
    );

    this.profitCenterRow = page.locator('text=621');
    this.sendLeadershipReportLink = page.getByRole('link', {
      name: /send leadership report via email/i
    });
  }

  async goto() {
    await this.page.goto('/IOL/IOLReport');
  }

  async verifyPageLoaded() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.reportsHeader).toBeVisible();
  }

  async verifyUser(email: string) {
    await expect(this.page.getByText(email)).toBeVisible();
  }

  async sendLeadershipReport() {
    await this.sendLeadershipReportLink.click();
  }

  async verifyProfitCenter(profitCenter: string) {
    await expect(
      this.page.getByText(profitCenter, { exact: true })
    ).toBeVisible();
  }

  async signOut() {
    await this.signOutLink.click();
  }
}