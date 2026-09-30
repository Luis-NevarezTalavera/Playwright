// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class AdminLookupAnsweredSurveysCurrentMonthPage {
  readonly page: Page;

  readonly employeeEmailInput: Locator;

  // Generic action buttons
  readonly submitButton: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.employeeEmailInput = page.getByLabel(/employee.?s email/i);

    // Prefer accessible roles
    this.submitButton = page.getByRole('button').first();

    // Optional navigation button if survey pages expose one
    this.nextButton = page.getByRole('button', { name: /next|continue/i });
  }

  async goto(baseUrl: string) {
    await this.page.goto(
      `${baseUrl}/support/AdminLookupAnsweredSurveysCurrentMonth`
    );
  }

  async enterEmployeeEmail(email: string) {
    await this.employeeEmailInput.fill(email);
  }

  async submitLookup() {
    await this.submitButton.click();
  }

  async lookupEmployee(email: string) {
    await this.enterEmployeeEmail(email);
    await this.submitLookup();
  }

  async validateRequiredEmail() {
    await this.employeeEmailInput.clear();

    await this.submitLookup();

    const validationMessage = await this.employeeEmailInput.evaluate(
      (element: HTMLInputElement) => element.validationMessage
    );

    expect(validationMessage).not.toBe('');
  }

  async validateInvalidEmailFormat() {
    await this.employeeEmailInput.fill('invalid-email');

    await this.submitLookup();

    const validationMessage = await this.employeeEmailInput.evaluate(
      (element: HTMLInputElement) => element.validationMessage
    );

    expect(validationMessage).not.toBe('');
  }

  async validateEmailAccepted(email: string) {
    await this.employeeEmailInput.fill(email);

    const isValid = await this.employeeEmailInput.evaluate(
      (element: HTMLInputElement) => element.checkValidity()
    );

    expect(isValid).toBeTruthy();
  }

  async goToNextQuestion() {
    await expect(this.nextButton).toBeVisible();
    await this.nextButton.click();
  }

  async isLoaded() {
    await expect(
      this.page.getByRole('heading', {
        name: /user lookup|current month/i,
      })
    ).toBeVisible();
  }
}