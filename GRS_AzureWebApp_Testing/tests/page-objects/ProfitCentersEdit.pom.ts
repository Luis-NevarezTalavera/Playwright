// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class ProfitCenterEditPage {
  readonly page: Page;

  readonly pcNameInput: Locator;
  readonly pcNumberInput: Locator;
  readonly pclEmailInput: Locator;
  readonly iolEmailInput: Locator;

  readonly saveButton: Locator;
  readonly cancelButton: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pcNameInput = page.getByRole('textbox', { name: /pc name/i });

    this.pcNumberInput = page.getByRole('textbox', { name: /pc #|pc number/i });

    this.pclEmailInput = page.getByRole('textbox', { name: /pcl/i });

    this.iolEmailInput = page.getByRole('textbox', { name: /iol/i });

    this.saveButton = page.getByRole('button', { name: /save/i });

    this.cancelButton = page.getByRole('button', { name: /cancel/i });

    this.nextButton = page.getByRole('button', { name: /next/i });
  }

  async enterPcName(value: string): Promise<void> {
    await this.pcNameInput.fill(value);
  }

  async enterPcNumber(value: string): Promise<void> {
    await this.pcNumberInput.fill(value);
  }

  async enterPclEmail(value: string): Promise<void> {
    await this.pclEmailInput.fill(value);
  }

  async enterIolEmail(value: string): Promise<void> {
    await this.iolEmailInput.fill(value);
  }

  async navigateToNextQuestion(): Promise<void> {
    await this.nextButton.click();
  }

  async validateRequiredFields(): Promise<void> {
    await expect(this.pcNameInput).not.toHaveValue('');
    await expect(this.pcNumberInput).not.toHaveValue('');
    await expect(this.pclEmailInput).not.toHaveValue('');
    await expect(this.iolEmailInput).not.toHaveValue('');
  }

  async validateRequiredError(
    fieldName: string,
    errorText = 'Required'
  ): Promise<void> {
    const field = this.page.getByRole('textbox', {
      name: new RegExp(fieldName, 'i')
    });

    await field.blur();

    await expect(
      this.page.getByText(errorText, { exact: false })
    ).toBeVisible();
  }

  async save(): Promise<void> {
    await this.validateRequiredFields();
    await this.saveButton.click();
  }
}