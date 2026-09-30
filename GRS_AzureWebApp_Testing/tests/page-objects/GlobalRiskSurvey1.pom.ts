// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class GlobalRiskSurveyPage1 {
  readonly page: Page;

  // Question
  readonly incidentQuestionGroup: Locator;
  readonly yesRadio: Locator;
  readonly noRadio: Locator;

  readonly allPartiestotheIncidentTextInput: Locator;


  // Common controls
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Radio buttons
    this.yesRadio = page.getByRole('radio', {
      name: /^yes$/i,
    });

    this.noRadio = page.getByRole('radio', {
      name: /^no$/i,
    });

    // Radiogroup may or may not be properly labeled by the application
    this.incidentQuestionGroup = page.getByRole('radiogroup').first();

    this.allPartiestotheIncidentTextInput = this.incidentQuestionGroup.getByRole('textbox', { name: /all parties to the incident/i, });

    // Common navigation button patterns
    this.nextButton = page.getByRole('button', {name: /next|continue|save and continue/i,}).first();
  }

  /**
   * Navigate to survey page
   */
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Select Yes
   */
  async selectYes(): Promise<void> {
    await this.yesRadio.check();
  }

  /**
   * Select No
   */
  async selectNo(): Promise<void> {
    await this.noRadio.check();
  }

  /**
   * Select answer by boolean
   */
  async answerIncidentQuestion(hasIncident: boolean): Promise<void> {
    if (hasIncident) {
      await this.selectYes();
    } else {
      await this.selectNo();
    }
  }

  /**
   * Verify radio selection
   */
  async verifyIncidentAnswer(expected: 'Yes' | 'No'): Promise<void> {
    if (expected === 'Yes') {
      await expect(this.yesRadio).toBeChecked();
    } else {
      await expect(this.noRadio).toBeChecked();
    }
  }

  /**
   * Advance to the next survey page
   */
  async goToNextQuestion(): Promise<void> {
    await this.nextButton.click();
  }

  /**
   * Validate required question before continuing
   */
  async validateIncidentQuestionIsRequired(): Promise<void> {
    await this.goToNextQuestion();

    // Adjust selector to application's validation UI
    const validationMessage = this.page.getByText(
      /required|please answer|this field is required/i
    );

    await expect(validationMessage).toBeVisible();
  }

  /**
   * Validate an answer was provided
   */
  async validateAnswerProvided(): Promise<void> {
    await expect(
      this.yesRadio.or(this.noRadio)
    ).toHaveCount(2);

    const isAnswered =
      await this.yesRadio.isChecked() ||
      await this.noRadio.isChecked();

    expect(isAnswered).toBeTruthy();
  }

  /**
   * Generic textbox locator by accessible label
   */
  getTextInput(label: string): Locator {
    return this.page.getByRole('textbox', {
      name: new RegExp(label, 'i'),
    });
  }

  /**
   * Generic text entry method
   */
  async enterText(label: string, value: string): Promise<void> {
    const input = this.getTextInput(label);

    await expect(input).toBeVisible();
    await input.fill(value);
  }

  /**
   * Validate required textbox
   */
  async validateRequiredTextInput(label: string): Promise<void> {
    const input = this.getTextInput(label);

    await input.clear();
    await this.goToNextQuestion();

    const validationMessage = this.page.getByText(
      /required|please complete|cannot be blank/i
    );

    await expect(validationMessage).toBeVisible();
  }

  /**
   * Returns the current page number if displayed
   */
  async getCurrentPageNumber(): Promise<number | null> {
    const pageText = await this.page
      .getByText(/page\s+\d+\s+of\s+\d+/i)
      .first()
      .textContent();

    if (!pageText) {
      return null;
    }

    const match = pageText.match(/page\s+(\d+)/i);
    return match ? Number(match[1]) : null;
  }
}