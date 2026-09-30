// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { Locator, Page, expect } from '@playwright/test';

export class IncidentReportPage {
  readonly page: Page;

  // Navigation
  readonly previousButton: Locator;
  readonly completeButton: Locator;

  // General Text Fields
  readonly profitCenterName: Locator;
  readonly profitCenterNumber: Locator;
  readonly costCenterNumber: Locator;
  readonly fromField: Locator;
  readonly positionField: Locator;
  readonly dateField: Locator;
  readonly contactField: Locator;
  readonly contactPhoneField: Locator;
  readonly contactEmailField: Locator;
  readonly accountNameField: Locator;

  // Acquired Business
  readonly acquiredBusinessYes: Locator;
  readonly acquiredBusinessNo: Locator;
  readonly acquiredEntityNameField: Locator;
  readonly acquisitionDateField: Locator;
  readonly dealTypeField: Locator;

  // Policy Information
  readonly policyPeriodField: Locator;
  readonly departmentField: Locator;
  readonly carrierPolicyNumberField: Locator;
  readonly incidentDateField: Locator;
  readonly lineOfBusinessField: Locator;
  readonly accountProducerField: Locator;
  readonly accountManagerField: Locator;

  // Description Fields
  readonly descriptionTextArea: Locator;
  readonly actionTakenTextArea: Locator;
  readonly suggestionsTextArea: Locator;

  constructor(page: Page) {
    this.page = page;

    // Navigation
    this.previousButton = page.getByRole('button', { name: /previous/i });
    this.completeButton = page.getByRole('button', { name: /complete/i });

    // Text fields
    this.profitCenterName = page.getByRole('textbox', {
      name: /profit center name/i
    });

    this.profitCenterNumber = page.getByRole('textbox', {
      name: /profit center/i
    });

    this.costCenterNumber = page.getByRole('textbox', {
      name: /cost center/i
    });

    this.fromField = page.getByRole('textbox', {
      name: /^from/i
    });

    this.positionField = page.getByRole('textbox', {
      name: /position/i
    });

    this.dateField = page.getByRole('textbox', {
      name: /^date/i
    });

    this.contactField = page.getByRole('textbox', {
      name: /^contact/i
    });

    this.contactPhoneField = page.getByRole('textbox', {
      name: /phone/i
    });

    this.contactEmailField = page.getByRole('textbox', {
      name: /e-mail|email/i
    });

    this.accountNameField = page.getByRole('textbox', {
      name: /account name/i
    });

    // Acquisition section
    this.acquiredBusinessYes = page.getByRole('radio', {
      name: /^yes$/i
    });

    this.acquiredBusinessNo = page.getByRole('radio', {
      name: /^no$/i
    });

    this.acquiredEntityNameField = page.getByRole('textbox', {
      name: /name of acquired entity/i
    });

    this.acquisitionDateField = page.getByRole('textbox', {
      name: /date of acquisition/i
    });

    this.dealTypeField = page.getByRole('textbox', {
      name: /type of deal/i
    });

    // Policy Information
    this.policyPeriodField = page.getByRole('textbox', {
      name: /policy period/i
    });

    this.departmentField = page.getByRole('textbox', {
      name: /department/i
    });

    this.carrierPolicyNumberField = page.getByRole('textbox', {
      name: /carrier.*policy number/i
    });

    this.incidentDateField = page.getByRole('textbox', {
      name: /date of incident/i
    });

    this.lineOfBusinessField = page.getByRole('textbox', {
      name: /line of business/i
    });

    this.accountProducerField = page.getByRole('textbox', {
      name: /account producer/i
    });

    this.accountManagerField = page.getByRole('textbox', {
      name: /account manager|csr/i
    });

    // Text areas
    this.descriptionTextArea = page.getByRole('textbox', {
      name: /description/i
    });

    this.actionTakenTextArea = page.getByRole('textbox', {
      name: /action taken/i
    });

    this.suggestionsTextArea = page.getByRole('textbox', {
      name: /suggestions/i
    });
  }

  /**
   * Navigate to next survey page.
   */
  async clickNext(): Promise<void> {
    await this.completeButton.click();
  }

  /**
   * Navigate to previous survey page.
   */
  async clickPrevious(): Promise<void> {
    await this.previousButton.click();
  }

  /**
   * Fill any textbox field.
   */
  async enterText(field: Locator, value: string): Promise<void> {
    await field.fill(value);
  }

  /**
   * Select acquired business.
   */
  async setAcquiredBusiness(isAcquired: boolean): Promise<void> {
    if (isAcquired) {
      await this.acquiredBusinessYes.check();
    } else {
      await this.acquiredBusinessNo.check();
    }
  }

  /**
   * Select Cause Of Loss option
   */
  async selectCauseOfLoss(option: string): Promise<void> {
    await this.page
      .getByRole('radio', { name: new RegExp(option, 'i') })
      .check();
  }

  /**
   * Fill Description section.
   */
  async enterDescription(description: string): Promise<void> {
    await this.descriptionTextArea.fill(description);
  }

  /**
   * Fill Action Taken.
   */
  async enterActionTaken(action: string): Promise<void> {
    await this.actionTakenTextArea.fill(action);
  }

  /**
   * Fill Suggestions.
   */
  async enterSuggestions(suggestions: string): Promise<void> {
    await this.suggestionsTextArea.fill(suggestions);
  }

  /**
   * Validate required field.
   */
  async validateRequiredField(field: Locator): Promise<void> {
    await expect(field).toBeVisible();
    await expect(field).toHaveAttribute(/required|aria-required/, /true|required/i);
  }

  /**
   * Validate all visible required fields.
   */
  async validateRequiredFields(): Promise<void> {
    const requiredFields = this.page.locator(
      '[required], [aria-required="true"]'
    );

    const count = await requiredFields.count();

    for (let i = 0; i < count; i++) {
      await expect(requiredFields.nth(i)).toBeVisible();
    }
  }

  /**
   * Verify validation message after submit.
   */
  async expectValidationMessage(message: string): Promise<void> {
    await expect(
      this.page.getByText(message, { exact: false })
    ).toBeVisible();
  }

  /**
   * Complete submission workflow.
   */
  async submit(): Promise<void> {
    await this.clickNext();
  }
}