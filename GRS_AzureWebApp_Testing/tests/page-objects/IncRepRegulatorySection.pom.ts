import { Locator, expect, Page } from '@playwright/test';

export class RegulatorySection {
  readonly page: Page;

  readonly agencyName: Locator;
  readonly inquiryDate: Locator;
  readonly caseReference: Locator;
  readonly inquiryDescription: Locator;

  constructor(page: Page) {
    this.page = page;

    this.agencyName = page.getByLabel(/agency/i);
    this.inquiryDate = page.getByLabel(/date/i);
    this.caseReference = page.getByLabel(/reference/i);
    this.inquiryDescription = page.getByLabel(/description/i);
  }

  async validateRequiredFields() {
    await expect(this.agencyName).toBeVisible();
    await expect(this.inquiryDescription).toBeVisible();
  }
}