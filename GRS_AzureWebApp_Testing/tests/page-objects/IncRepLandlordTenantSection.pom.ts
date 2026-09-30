import { Locator, expect, Page } from '@playwright/test';

export class LandlordTenantSection {
  readonly page: Page;

  readonly propertyLocation: Locator;
  readonly leaseDate: Locator;
  readonly disputeDescription: Locator;

  constructor(page: Page) {
    this.page = page;

    this.propertyLocation = page.getByLabel(/property/i);
    this.leaseDate = page.getByLabel(/lease/i);
    this.disputeDescription = page.getByLabel(/dispute description/i);
  }

  async validateRequiredFields() {
    await expect(this.propertyLocation).toBeVisible();
    await expect(this.disputeDescription).toBeVisible();
  }
}