import { Locator, expect, Page } from '@playwright/test';

export class EmploymentMatterSection {
  readonly page: Page;

  readonly employeeName: Locator;
  readonly employeeTitle: Locator;
  readonly employmentIssue: Locator;
  readonly eventDescription: Locator;

  constructor(page: Page) {
    this.page = page;

    this.employeeName = page.getByLabel(/employee name/i);
    this.employeeTitle = page.getByLabel(/title/i);
    this.employmentIssue = page.getByLabel(/employment issue/i);
    this.eventDescription = page.getByLabel(/description/i);
  }

  async validateRequiredFields() {
    await expect(this.employeeName).toBeVisible();
    await expect(this.eventDescription).toBeVisible();
  }
}