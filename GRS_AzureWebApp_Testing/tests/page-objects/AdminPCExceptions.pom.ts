// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

// pages/ProfitCenterExceptionsPage.ts

import { expect, Locator, Page } from '@playwright/test';

export class ProfitCenterExceptionsPage {
  readonly page: Page;

  // Navigation
  readonly profitCenterExceptionsLink: Locator;
  readonly createNewExceptionButton: Locator;

  // Search
  readonly searchInput: Locator;

  // Pagination
  readonly nextPageButton: Locator;

  // Table
  readonly exceptionsTable: Locator;

  constructor(page: Page) {
    this.page = page;

    this.profitCenterExceptionsLink = page.getByRole('link', {
      name: /profit center exceptions/i
    });

    this.createNewExceptionButton = page.getByRole('link', {
      name: /create new pc exception/i
    });

    this.searchInput = page.getByRole('textbox');

    this.nextPageButton = page.getByRole('link', {
      name: '›'
    });

    this.exceptionsTable = page.getByRole('table');
  }

  async goto() {
    await this.page.goto('/support/ListExceptions');
    await expect(this.createNewExceptionButton).toBeVisible();
  }

  async searchProfitCenter(pcNumber: string) {
    await this.searchInput.fill(pcNumber);
  }

  async clickCreateNewException() {
    await this.createNewExceptionButton.click();
  }

  async clickEditForProfitCenter(pcNumber: string) {
    const row = this.page.getByRole('row').filter({
      hasText: pcNumber
    });

    await row.getByRole('link', { name: /edit/i }).click();
  }

  async goToNextPage() {
    await this.nextPageButton.click();
  }

  async verifyProfitCenterExists(pcNumber: string) {
    await expect(
      this.page.getByRole('row').filter({
        hasText: pcNumber
      })
    ).toBeVisible();
  }

  async verifyTableLoaded() {
    await expect(this.exceptionsTable).toBeVisible();
  }
}