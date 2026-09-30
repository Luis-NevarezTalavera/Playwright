import { Locator, expect, Page } from '@playwright/test';

export class ContractsSection {
  readonly page: Page;

  readonly contractType: Locator;
  readonly counterParty: Locator;
  readonly effectiveDate: Locator;
  readonly contractSummary: Locator;

  constructor(page: Page) {
    this.page = page;

    this.contractType = page.getByLabel(/contract type/i);
    this.counterParty = page.getByLabel(/counterparty/i);
    this.effectiveDate = page.getByLabel(/effective date/i);
    this.contractSummary = page.getByLabel(/summary/i);
  }

  async validateRequiredFields() {
    await expect(this.contractType).toBeVisible();
    await expect(this.contractSummary).toBeVisible();
  }
}