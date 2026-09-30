// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { expect, Locator, Page } from '@playwright/test';

export class GlobalRiskSurveyPage2 {
  readonly page: Page;

  // Page elements
  readonly heading: Locator;
  readonly incidentQuestion: Locator;
  readonly noRadio: Locator;
  readonly yesRadio: Locator;

  readonly nextButton: Locator;
  readonly previousButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.heading = page.getByRole('heading', { name: /global risk survey/i });

    this.incidentQuestion = page.getByText( /have you become aware of any act, error, omission/i );

    this.noRadio = page.getByRole('radio', { name: /^no$/i });

    this.yesRadio = page.getByRole('radio', { name: /^yes$/i });

    this.nextButton = page.getByRole('button', { name: /next/i });

    this.previousButton = page.getByRole('button', { name: /(previous|back)/i });
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
    await this.waitForPageLoaded();
  }

  async waitForPageLoaded(): Promise<void> {
    await expect(this.heading).toBeVisible();
    await expect(this.incidentQuestion).toBeVisible();
  }

  // =====================================================
  // Radio Button Methods
  // =====================================================

  async selectIncidentYes(): Promise<void> {
    await this.yesRadio.check();
  }

  async selectIncidentNo(): Promise<void> {
    await this.noRadio.check();
  }

  async selectRadioByLabel(label: string): Promise<void> {
    await this.page
      .getByRole('radio', { name: new RegExp(`^${label}$`, 'i') }).check();
  }

  async verifyRadioSelected(label: string): Promise<void> {
    await expect(
      this.page.getByRole('radio', { name: new RegExp(`^${label}$`, 'i')
      })
    ).toBeChecked();
  }

  // =====================================================
  // Text Box Methods
  // =====================================================

  async enterText(fieldLabel: string, value: string): Promise<void> {
    const textbox = this.page.getByRole('textbox', {
      name: new RegExp(fieldLabel, 'i')
    });

    await textbox.fill(value);
  }

  async appendText(fieldLabel: string, value: string): Promise<void> {
    const textbox = this.page.getByRole('textbox', {
      name: new RegExp(fieldLabel, 'i')
    });

    await textbox.pressSequentially(value);
  }

  async getTextValue(fieldLabel: string): Promise<string> {
    const textbox = this.page.getByRole('textbox', {
      name: new RegExp(fieldLabel, 'i')
    });

    return await textbox.inputValue();
  }

  async clearText(fieldLabel: string): Promise<void> {
    const textbox = this.page.getByRole('textbox', {
      name: new RegExp(fieldLabel, 'i')
    });

    await textbox.clear();
  }

  // =====================================================
  // Generic Survey Controls
  // =====================================================

  async answerQuestion(
    questionText: string,
    answer: 'Yes' | 'No'
  ): Promise<void> {
    const questionContainer = this.page
      .locator('*')
      .filter({ hasText: questionText });

    await questionContainer
      .getByRole('radio', { name: answer })
      .check();
  }

  async selectDropdown(
    fieldLabel: string,
    value: string
  ): Promise<void> {
    await this.page
      .getByRole('combobox', {
        name: new RegExp(fieldLabel, 'i')
      })
      .selectOption({ label: value });
  }

  async checkCheckbox(label: string): Promise<void> {
    await this.page
      .getByRole('checkbox', {
        name: new RegExp(label, 'i')
      })
      .check();
  }

  // =====================================================
  // Navigation
  // =====================================================

  async clickNext(): Promise<void> {
    await this.nextButton.click();
  }

  async clickPrevious(): Promise<void> {
    await this.previousButton.click();
  }

  async navigateToNextQuestion(): Promise<void> {
    await this.clickNext();
    await this.page.waitForLoadState('networkidle');
  }

  async navigateToPreviousQuestion(): Promise<void> {
    await this.clickPrevious();
    await this.page.waitForLoadState('networkidle');
  }

  // =====================================================
  // Validation Helpers
  // =====================================================

  async attemptSubmitWithoutAnswer(): Promise<void> {
    await this.clickNext();
  }

  async validateRequiredFieldError(): Promise<void> {
    const validationMessage = this.page
      .getByText(/required|must answer|please select/i);

    await expect(validationMessage).toBeVisible();
  }

  async validateIncidentQuestionRequired(): Promise<void> {
    await this.clickNext();

    await expect(
      this.page.getByText(/required|must answer|please select/i)
    ).toBeVisible();
  }

  async verifyNoValidationErrors(): Promise<void> {
    await expect(
      this.page.getByText(/required|must answer|please select/i)
    ).toHaveCount(0);
  }

  async validatePageNumber(
    currentPage: number,
    totalPages: number
  ): Promise<void> {
    await expect(
      this.page.getByText(
        new RegExp(`Page\\s+${currentPage}\\s+of\\s+${totalPages}`, 'i')
      )
    ).toBeVisible();
  }
}