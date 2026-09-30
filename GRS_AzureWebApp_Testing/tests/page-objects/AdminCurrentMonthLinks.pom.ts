// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

// pages/AdminCurrentMonthLinksPage.ts
import { expect, Locator, Page } from '@playwright/test';

export class AdminCurrentMonthLinksPage {
  readonly page: Page;

  // Navigation
  readonly incidentReportLink: Locator;
  readonly leadershipReportsLink: Locator;
  readonly adminLink: Locator;
  readonly signOutLink: Locator;

  // Search
  readonly searchBox: Locator;

  // Table
  readonly linksTable: Locator;

  // Pagination
  readonly nextPageButton: Locator;
  readonly previousPageButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Recommended accessibility-first locators
    this.incidentReportLink = page.getByRole('link', {
      name: /incident report/i,
    });

    this.leadershipReportsLink = page.getByRole('link', {
      name: /leadership reports/i,
    });

    this.adminLink = page.getByRole('link', {
      name: /admin/i,
    });

    this.signOutLink = page.getByRole('link', {
      name: /sign out/i,
    });

    this.searchBox = page.getByRole('searchbox').or(
      page.getByLabel(/search/i)
    );

    this.linksTable = page.getByRole('table');

    this.nextPageButton = page.getByRole('link', {
      name: /^›$|next/i,
    });

    this.previousPageButton = page.getByRole('link', {
      name: /^‹$|previous/i,
    });
  }

  async goto() {
    await this.page.goto(
      'https://grs-dev.bbrownretapps.com/support/AdminLinksCurrentMonth'
    );
  }

  async search(value: string) {
    await this.searchBox.fill(value);
  }

  async clearSearch() {
    await this.searchBox.clear();
  }

  async goToNextPage() {
    await expect(this.nextPageButton).toBeVisible();
    await this.nextPageButton.click();
  }

  async goToPreviousPage() {
    await expect(this.previousPageButton).toBeVisible();
    await this.previousPageButton.click();
  }

  async openIncidentReport() {
    await this.incidentReportLink.click();
  }

  async openLeadershipReports() {
    await this.leadershipReportsLink.click();
  }

  async openAdmin() {
    await this.adminLink.click();
  }

  async signOut() {
    await this.signOutLink.click();
  }

  async verifyPageLoaded() {
    await expect(
      this.page.getByRole('heading', {
        name: /admin current month's links/i,
      })
    ).toBeVisible();
  }

  async verifyTableVisible() {
    await expect(this.linksTable).toBeVisible();
  }

  async verifyNoDataDisplayed() {
    await expect(
      this.page.getByText(/no data available in table/i)
    ).toBeVisible();
  }

  async verifySearchResultsContain(text: string) {
    await expect(this.linksTable).toContainText(text);
  }

  /**
   * Generic required field validation
   */
  async validateRequiredField(
    locator: Locator,
    expectedMessage?: string
  ) {
    await locator.focus();
    await locator.blur();

    if (expectedMessage) {
      await expect(
        this.page.getByText(expectedMessage)
      ).toBeVisible();
    } else {
      await expect(locator).toHaveAttribute('required');
    }
  }
}