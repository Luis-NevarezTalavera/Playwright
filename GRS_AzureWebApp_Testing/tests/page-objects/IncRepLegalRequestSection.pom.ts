import { Locator, expect, Page } from '@playwright/test';

export class LegalRequestSection {
  readonly page: Page;

  readonly requestingParty: Locator;
  readonly receivedDate: Locator;
  readonly dueDate: Locator;
  readonly requestDescription: Locator;

  
  constructor(page: Page) {
    this.page = page;

    this.requestingParty = page.getByLabel(/requesting party/i);
    this.receivedDate = page.getByLabel(/received date/i);
    this.dueDate = page.getByLabel(/due date/i);
    this.requestDescription = page.getByLabel(/description/i);
  }
  
  async validateRequiredFields() {
    await expect(this.requestingParty).toBeVisible();
    await expect(this.requestDescription).toBeVisible();
  }
}