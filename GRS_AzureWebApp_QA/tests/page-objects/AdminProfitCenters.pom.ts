// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class ProfitCenterAdminPage {
  readonly page: Page;

  // Table
  readonly profitCenterTable: Locator;

  // Controls
  readonly searchInput: Locator;
  readonly nextPageButton: Locator;
  readonly previousPageButton: Locator;
  readonly signOutLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.profitCenterTable = page.getByRole('table');

    this.searchInput = page.getByRole('textbox', {
      name: /search/i
    });

    this.nextPageButton = page.getByRole('link', {
      name: /next|›/i
    });

    this.previousPageButton = page.getByRole('link', {
      name: /previous|‹/i
    });

    this.signOutLink = page.getByRole('link', {
      name: /sign out/i
    });
  }

  async waitForPageToLoad(): Promise<void> {
    await expect(
      this.page.getByRole('heading', {
        name: /current month's profit centers/i
      })
    ).toBeVisible();
  }

  async searchProfitCenter(searchText: string): Promise<void> {
    await this.searchInput.fill(searchText);
  }

  async clearSearch(): Promise<void> {
    await this.searchInput.clear();
  }

  async navigateToNextPage(): Promise<void> {
    await this.nextPageButton.click();
  }

  async navigateToPreviousPage(): Promise<void> {
    await this.previousPageButton.click();
  }

  async signOut(): Promise<void> {
    await this.signOutLink.click();
  }

  /**
   * Returns a table row containing the specified PC number.
   */
  getRowByPcNumber(pcNumber: string): Locator {
    return this.page.getByRole('row').filter({
      hasText: pcNumber
    });
  }

  /**
   * Returns a table row containing the specified PC name.
   */
  getRowByPcName(pcName: string): Locator {
    return this.page.getByRole('row').filter({
      hasText: pcName
    });
  }

  async clickEditByPcNumber(pcNumber: string): Promise<void> {
    const row = this.getRowByPcNumber(pcNumber);

    await row.getByRole('link', {
      name: /^edit$/i
    }).click();
  }

  async clickEditByPcName(pcName: string): Promise<void> {
    const row = this.getRowByPcName(pcName);

    await row.getByRole('link', {
      name: /^edit$/i
    }).click();
  }

  async validateRowExists(pcNumber: string): Promise<void> {
    await expect(this.getRowByPcNumber(pcNumber)).toBeVisible();
  }

  async validateSearchResultsContain(searchValue: string): Promise<void> {
    await expect(this.profitCenterTable).toContainText(searchValue);
  }
}