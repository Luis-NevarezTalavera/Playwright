import { Locator, expect, Page } from '@playwright/test';

export class CyberSecuritySection {
  readonly page: Page;

  readonly incidentDate: Locator;
  readonly affectedSystems: Locator;
  readonly piiCompromised: Locator;
  readonly incidentSummary: Locator;

  constructor(page: Page) {
    this.page = page;

    this.incidentDate = page.getByLabel(/incident date/i);
    this.affectedSystems = page.getByLabel(/affected systems/i);
    this.piiCompromised = page.getByRole('radio', { name: /personal information/i });
    this.incidentSummary = page.getByLabel(/incident summary/i);
  }

  async validateRequiredFields() {
    await expect(this.incidentDate).toBeVisible();
    await expect(this.incidentSummary).toBeVisible();
    await expect(this.piiCompromised).toBeVisible();
  }
}