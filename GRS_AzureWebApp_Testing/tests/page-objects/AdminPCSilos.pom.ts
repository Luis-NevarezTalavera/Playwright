// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

// pages/ProfitCenterSilosPage.ts

/*
More Robust Locator Alternative

Since DataTables often generates limited accessibility attributes, you may find these more stable than role-based pagination locators:

this.searchInput = page.locator('input[type="search"]');
this.nextPageButton = page.locator('.paginate_button.next');
this.previousPageButton = page.locator('.paginate_button.previous');
this.profitCenterTable = page.locator('#DataTables_Table_0');
*/

import { expect, Locator, Page } from '@playwright/test';

export class ProfitCenterSilosPage {
  readonly page: Page;

  // Navigation
  readonly adminMenu: Locator;
  readonly profitCenterSilosLink: Locator;

  // Search
  readonly searchInput: Locator;

  // Table
  readonly profitCenterTable: Locator;

  // Pagination
  readonly nextPageButton: Locator;
  readonly previousPageButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Prefer accessibility-based locators
    this.adminMenu = page.getByRole('link', { name: /admin/i });
    this.profitCenterSilosLink = page.getByRole('link', {
      name: /profit center silos/i,
    });

    this.searchInput = page.getByRole('textbox', {
      name: /search/i,
    });

    this.profitCenterTable = page.getByRole('table');

    this.nextPageButton = page.getByRole('link', {
      name: '›',
    });

    this.previousPageButton = page.getByRole('link', {
      name: '‹',
    });
  }

  async goto() {
    await this.page.goto('/support/ListSiloProfitCenter');
  }

  async searchProfitCenter(searchValue: string) {
    await this.searchInput.fill(searchValue);
  }

  async clearSearch() {
    await this.searchInput.clear();
  }

  async clickNextPage() {
    await this.nextPageButton.click();
  }

  async clickPreviousPage() {
    await this.previousPageButton.click();
  }

  async getRowByProfitCenterName(name: string): Promise<Locator> {
    return this.page.getByRole('row').filter({
      hasText: name,
    });
  }

  async verifyProfitCenterExists(name: string) {
    const row = await this.getRowByProfitCenterName(name);
    await expect(row).toBeVisible();
  }

  async verifySearchResultsContain(name: string) {
    await expect(
      this.page.getByRole('row').filter({
        hasText: name,
      })
    ).toHaveCount(1);
  }

  async verifyTableVisible() {
    await expect(this.profitCenterTable).toBeVisible();
  }

  async verifyPageLoaded() {
    await expect(
      this.page.getByText('Profit Centers in Silos will be ignored.')
    ).toBeVisible();
  }

  /**
   * Generic required field validation helper
   * Reusable for edit/create pages.
   */
  async validateRequiredField(
    field: Locator,
    expectedMessage: string
  ) {
    await field.focus();
    await field.blur();

    await expect(
      this.page.getByText(expectedMessage)
    ).toBeVisible();
  }

  /**
   * Validation helper for HTML required controls
   */
  async validateFieldIsRequired(field: Locator) {
    await expect(field).toHaveAttribute('required', /.+/);
  }
}
