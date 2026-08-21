// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

/*
Suggested Improvements

If you have access to the page HTML, I would further strengthen the locators by targeting:

Table via getByRole('table')
Profit Center column via getByRole('columnheader', { name: 'ProfitCenterNumber' })
Action links via accessible names
Success/error toast messages after report submission
Disabled state validation for pagination controls

These changes would make the POM more resilient and aligned with Playwright best practices.
*/

import { expect, Locator, Page } from '@playwright/test';

export class GenerateReportPage {
  readonly page: Page;

  // Controls
  readonly searchInput: Locator;
  readonly paginationNextButton: Locator;
  readonly paginationPreviousButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Search textbox
    this.searchInput = page.getByRole('textbox', {
      name: /search/i,
    });

    // DataTables pagination buttons
    this.paginationNextButton = page.getByRole('link', {
      name: /next|›/i,
    });

    this.paginationPreviousButton = page.getByRole('link', {
      name: /previous|‹/i,
    });
  }

  /**
   * Navigate to Generate Report page
   */
  async goto(): Promise<void> {
    await this.page.goto('/support/GenerateReport');
    await this.waitForPageLoad();
  }

  /**
   * Wait for page to finish loading
   */
  async waitForPageLoad(): Promise<void> {
    await expect(
      this.page.getByRole('heading', {
        name: /global risk survey reports admin/i,
      })
    ).toBeVisible();
  }

  /**
   * Enter search criteria
   */
  async enterSearchText(searchText: string): Promise<void> {
    await this.searchInput.fill(searchText);
  }

  /**
   * Search for a profit center
   */
  async searchProfitCenter(profitCenter: string): Promise<void> {
    await this.enterSearchText(profitCenter);
  }

  /**
   * Required field validation
   */
  async validateSearchFieldRequired(): Promise<void> {
    const value = await this.searchInput.inputValue();

    expect(
      value.trim(),
      'Search field is required.'
    ).not.toBe('');
  }

  /**
   * Clear search value
   */
  async clearSearch(): Promise<void> {
    await this.searchInput.clear();
  }

  /**
   * Click "Send Leadership Report via email"
   * for a specific profit center.
   */
  async sendLeadershipReport(
    profitCenterNumber: string
  ): Promise<void> {
    const row = this.page.locator('tr').filter({
      hasText: profitCenterNumber,
    });

    await expect(row).toBeVisible();

    await row
      .getByRole('link', {
        name: /send leadership report via email/i,
      })
      .click();
  }

  /**
   * Verify profit center exists in results
   */
  async verifyProfitCenterVisible(
    profitCenterNumber: string
  ): Promise<void> {
    await expect(
      this.page.getByText(profitCenterNumber, {
        exact: true,
      })
    ).toBeVisible();
  }

  /**
   * Navigate to next page of results
   */
  async goToNextQuestion(): Promise<void> {
    await this.paginationNextButton.click();
  }

  /**
   * Navigate to previous page of results
   */
  async goToPreviousPage(): Promise<void> {
    await this.paginationPreviousButton.click();
  }

  /**
   * Verify report action exists
   */
  async verifyReportActionAvailable(
    profitCenterNumber: string
  ): Promise<void> {
    const row = this.page.locator('tr').filter({
      hasText: profitCenterNumber,
    });

    await expect(
      row.getByRole('link', {
        name: /send leadership report via email/i,
      })
    ).toBeVisible();
  }

  /**
   * Get number of visible rows
   */
  async getVisibleRowCount(): Promise<number> {
    return await this.page.locator('tbody tr').count();
  }
}