// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class GlobalRiskSurveyPage3 {
  readonly page: Page;

  // Question Controls
  readonly incidentQuestionGroup: Locator;
  readonly yesRadio: Locator;
  readonly noRadio: Locator;

  // Navigation
  readonly nextButton: Locator;
  readonly previousButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Radio group
    this.incidentQuestionGroup = page.getByText(
      'Have you become aware of any act, error, omission, claim, or demand'
    );

    this.yesRadio = page.getByRole('radio', { name: /yes/i });
    this.noRadio = page.getByRole('radio', { name: /no/i });

    // Navigation buttons
    this.nextButton = page.getByRole('button', { name: /next/i });
    this.previousButton = page.getByRole('button', { name: /previous|back/i });
  }

  /**
   * Navigate to survey
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
    await this.waitForPageLoaded();
  }

  /**
   * Wait for survey page to load
   */
  async waitForPageLoaded(): Promise<void> {
    await expect(
      this.page.getByText('GLOBAL RISK SURVEY', { exact: false })
    ).toBeVisible();
  }

  /**
   * Select Yes answer
   */
  async selectYes(): Promise<void> {
    await this.yesRadio.check();
  }

  /**
   * Select No answer
   */
  async selectNo(): Promise<void> {
    await this.noRadio.check();
  }

  /**
   * Returns selected value
   */
  async getIncidentAnswer(): Promise<'Yes' | 'No' | null> {
    if (await this.yesRadio.isChecked()) {
      return 'Yes';
    }

    if (await this.noRadio.isChecked()) {
      return 'No';
    }

    return null;
  }

  /**
   * Validate required question has been answered
   */
  async validateIncidentQuestionAnswered(): Promise<void> {
    const answered =
      (await this.yesRadio.isChecked()) ||
      (await this.noRadio.isChecked());

    expect(
      answered,
      'Incident question must be answered before proceeding'
    ).toBeTruthy();
  }

  /**
   * Click Next
   */
  async clickNext(): Promise<void> {
    await this.nextButton.click();
  }

  /**
   * Click Previous
   */
  async clickPrevious(): Promise<void> {
    await this.previousButton.click();
  }

  /**
   * Verify validation message appears
   */
  async expectRequiredFieldValidation(
    message = 'This field is required'
  ): Promise<void> {
    await expect(
      this.page.getByText(message, { exact: false })
    ).toBeVisible();
  }

  /**
   * Select answer and continue
   */
  async answerIncidentQuestion(answer: boolean): Promise<void> {
    if (answer) {
      await this.selectYes();
    } else {
      await this.selectNo();
    }

    await this.clickNext();
  }

  /**
   * Generic textbox by accessible label
   */
  getTextBox(label: string): Locator {
    return this.page.getByRole('textbox', { name: label });
  }

  /**
   * Fill textbox by label
   */
  async fillTextBox(label: string, value: string): Promise<void> {
    await this.getTextBox(label).fill(value);
  }

  /**
   * Validate textbox required
   */
  async validateRequiredTextBox(label: string): Promise<void> {
    const value = await this.getTextBox(label).inputValue();

    expect(
      value.trim(),
      `${label} is required`
    ).not.toBe('');
  }

  /**
   * Verify current page number
   */
  async expectPage(pageNumber: number): Promise<void> {
    await expect(
      this.page.getByText(`Page ${pageNumber}`, { exact: false })
    ).toBeVisible();
  }
}