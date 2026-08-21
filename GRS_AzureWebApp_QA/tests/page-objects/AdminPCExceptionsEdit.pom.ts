// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

// pages/ProfitCenterExceptionFormPage.ts

import { expect, Locator, Page } from '@playwright/test';

export class ProfitCenterExceptionFormPage {
  readonly page: Page;

  readonly pcNumberInput: Locator;
  readonly currencyDropdown: Locator;
  readonly endDateInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pcNumberInput = page.getByLabel(/pc number/i);

    this.currencyDropdown = page.getByLabel(/currency/i);

    this.endDateInput = page.getByLabel(/end date/i);

    this.saveButton = page.getByRole('button', {
      name: /save/i
    });
  }

  async createException(
    pcNumber: string,
    currency: string,
    endDate: string
  ) {
    await this.pcNumberInput.fill(pcNumber);
    await this.currencyDropdown.selectOption(currency);
    await this.endDateInput.fill(endDate);

    await this.saveButton.click();
  }

  async saveEmptyForm() {
    await this.saveButton.click();
  }

  async validateRequiredFields() {
    await expect(
      this.page.getByText(/pc number.*required/i)
    ).toBeVisible();

    await expect(
      this.page.getByText(/currency.*required/i)
    ).toBeVisible();

    await expect(
      this.page.getByText(/end date.*required/i)
    ).toBeVisible();
  }

  async validateBrowserRequiredAttributes() {
    await expect(this.pcNumberInput).toHaveAttribute(
      'required',
      /.*/
    );

    await expect(this.currencyDropdown).toHaveAttribute(
      'required',
      /.*/
    );

    await expect(this.endDateInput).toHaveAttribute(
      'required',
      /.*/
    );
  }
}