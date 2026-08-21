// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class AdminAddUserCurrentMonthPage {
  readonly page: Page;

  readonly fullNameInput: Locator;
  readonly profitCenterInput: Locator;
  readonly emailInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.fullNameInput = page.getByLabel(/full name/i);
    this.profitCenterInput = page.getByLabel(/profit center number/i);
    this.emailInput = page.getByLabel(/email/i);

    /*
    If Labels Are Not Properly Associated
    Many legacy MVC/Razor pages do not wire <label for=""> correctly. If getByLabel() fails, use this Playwright fallback:
    
    this.fullNameInput = page.getByRole('textbox', {
      name: /full name/i,
    });

    this.profitCenterInput = page.getByRole('textbox', {
      name: /profit center number/i,
    });

    this.emailInput = page.getByRole('textbox', {
      name: /email/i,
    });
    */

    this.submitButton = page.getByRole('button', {
      name: /submit|create|save|add user/i,
    });
  }

  async goto() {
    await this.page.goto(
      '/support/AdminAddUserCurrentMonth'
    );
  }

  async verifyPageLoaded() {
    await expect(
      this.page.getByRole('heading', {
        name: /admin add user for current month/i,
      })
    ).toBeVisible();
  }

  async enterFullName(fullName: string) {
    await this.fullNameInput.fill(fullName);
  }

  async enterProfitCenter(profitCenter: string) {
    await this.profitCenterInput.fill(profitCenter);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async completeForm(
    fullName: string,
    profitCenter: string,
    email: string
  ) {
    await this.enterFullName(fullName);
    await this.enterProfitCenter(profitCenter);
    await this.enterEmail(email);
  }

  async submit() {
    await this.submitButton.click();
  }

  /**
   * Validates browser-native required fields.
   */
  async validateRequiredFields() {
    await this.submit();

    await expect(this.fullNameInput).toHaveJSProperty(
      'validationMessage',
      /.+/
    );

    await expect(this.profitCenterInput).toHaveJSProperty(
      'validationMessage',
      /.+/
    );

    await expect(this.emailInput).toHaveJSProperty(
      'validationMessage',
      /.+/
    );
  }

  /**
   * Validates specific field one at a time.
   */
  async validateRequiredFullName() {
    await this.profitCenterInput.fill('1001');
    await this.emailInput.fill('test@bbrown.com');

    await this.submit();

    const isValid = await this.fullNameInput.evaluate(
      (el: HTMLInputElement) => el.checkValidity()
    );

    expect(isValid).toBeFalsy();
  }

  async validateRequiredProfitCenter() {
    await this.fullNameInput.fill('Playwright User');
    await this.emailInput.fill('test@bbrown.com');

    await this.submit();

    const isValid = await this.profitCenterInput.evaluate(
      (el: HTMLInputElement) => el.checkValidity()
    );

    expect(isValid).toBeFalsy();
  }

  async validateRequiredEmail() {
    await this.fullNameInput.fill('Playwright User');
    await this.profitCenterInput.fill('1001');

    await this.submit();

    const isValid = await this.emailInput.evaluate(
      (el: HTMLInputElement) => el.checkValidity()
    );

    expect(isValid).toBeFalsy();
  }

  /**
   * Successful navigation after submit.
   * Adjust URL/text once actual success page is known.
   */
  async waitForNextPage() {
    await Promise.race([
      this.page.waitForURL(/success|confirmation|report|dashboard/i),
      this.page.waitForLoadState('networkidle'),
    ]);
  }

  async createUser(
    fullName: string,
    profitCenter: string,
    email: string
  ) {
    await this.completeForm(
      fullName,
      profitCenter,
      email
    );

    await this.submit();
    await this.waitForNextPage();
  }
}