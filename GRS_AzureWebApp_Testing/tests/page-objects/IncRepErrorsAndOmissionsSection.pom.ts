import { Locator, expect, Page } from '@playwright/test';


export class ErrorsAndOmissionsSection {
  readonly page: Page;

readonly clientName: Locator;
readonly policyNumber: Locator;
readonly carrier: Locator;
readonly incidentDescription: Locator;
readonly estimatedExposure: Locator;

  constructor(page: Page) {
    
    this.page = page;
    this.clientName = page.getByLabel(/client name/i);
    this.policyNumber = page.getByLabel(/policy number/i);
    this.carrier = page.getByLabel(/carrier/i);
    this.incidentDescription = page.getByLabel(/description/i);
    this.estimatedExposure = page.getByLabel(/estimated exposure/i);

}

  async validateRequiredFields() {
    await expect(this.clientName).toBeVisible();
    await expect(this.incidentDescription).toBeVisible();
  }
}