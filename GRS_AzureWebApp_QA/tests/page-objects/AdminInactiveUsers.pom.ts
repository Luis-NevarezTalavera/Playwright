// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class InactiveUsersPage {
  readonly page: Page;

  // Header
  readonly heading: Locator;

  // Search
  readonly searchInput: Locator;

  // Pagination
  readonly previousButton: Locator;
  readonly nextButton: Locator;

  // Table
  readonly usersTable: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole('heading', {
      name: /inactive users/i
    });

    // DataTables search field typically has Search label
    this.searchInput = page.getByLabel(/search/i);

    this.previousButton = page.getByRole('link', {
      name: /^previous$|^‹$/i
    });

    this.nextButton = page.getByRole('link', {
      name: /^next$|^›$/i
    });

    this.usersTable = page.getByRole('table');

    /*
    Recommended Enhancement
    For greater resiliency, inspect the actual DOM and replace generic locators with explicit accessible names or test IDs, for example:

    page.getByRole('textbox', { name: 'Search' })
    page.getByRole('table', { name: 'Inactive Users' })
    page.getByTestId('inactive-users-table')
    
    */
  }

  async goto() {
    await this.page.goto(
      'https://grs-dev.bbrownretapps.com/support/ListInactiveUsers'
    );
  }

  async verifyPageLoaded() {
    await expect(this.heading).toBeVisible();
    await expect(this.usersTable).toBeVisible();
  }

  async searchUser(searchText: string) {
    await this.searchInput.fill(searchText);
  }

  async clearSearch() {
    await this.searchInput.clear();
  }

  async validateUserVisible(userName: string) {
    await expect(
      this.page.getByRole('cell', { name: new RegExp(userName, 'i') })
    ).toBeVisible();
  }

  async validateNoResults() {
    await expect(
      this.page.getByText(/no matching records found/i)
    ).toBeVisible();
  }

  async goToNextPage() {
    if (await this.nextButton.isEnabled()) {
      await this.nextButton.click();
    }
  }

  async goToPreviousPage() {
    if (await this.previousButton.isEnabled()) {
      await this.previousButton.click();
    }
  }

  async getRowCount(): Promise<number> {
    const rows = this.page.locator('table tbody tr');
    return await rows.count();
  }

  async validateTableHasData() {
    expect(await this.getRowCount()).toBeGreaterThan(0);
  }

  /**
   * Example required field validation.
   * Search is optional on the current page, but this pattern
   * can be reused for pages that require search criteria.
   */
  async validateRequiredSearchField() {
    await this.searchInput.fill('');
    await this.searchInput.blur();

    await expect(this.searchInput).toBeVisible();

    // Replace with application-specific validation message if present
    // await expect(
    //   this.page.getByText('Search is required')
    // ).toBeVisible();
  }
}