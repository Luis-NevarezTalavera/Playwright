// Global Risk Survey, Monthly Survey page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Monthly Survey page

import { Page, Locator, expect } from '@playwright/test';

export class GlobalRiskSurveyPage0 {
  readonly page: Page;

  // Header / Navigation
  readonly adminLink: Locator;
  readonly signOutLink: Locator;
  readonly userEmail: Locator;

  // Main Content
  readonly pageTitle: Locator;
  readonly reportingNotice: Locator;
  readonly whatIsSurveyHeading: Locator;
  readonly identifyIncidentHeading: Locator;

  // Incident Sections
  readonly errorsSection: Locator;
  readonly omissionsSection: Locator;
  readonly demandsSection: Locator;
  readonly inquiriesSection: Locator;

  // Start Button
  readonly startButton: Locator;

  // Footer
  readonly copyrightText: Locator;

  constructor(page: Page) {
    this.page = page;

    // Navigation
    this.adminLink = page.getByRole('link', { name: /admin/i });
    this.signOutLink = page.getByRole('link', { name: /sign out/i });
    this.userEmail = page.getByText(/@bbrown\.com/i);

    // Main Content
    this.pageTitle = page.getByText('GLOBAL RISK SURVEY AND INCIDENT REPORTING');
    this.reportingNotice = page.getByText(
      'Potential incidents should be reported to legal'
    );

    this.whatIsSurveyHeading = page.getByText(
      'What is the Global Risk Survey?'
    );

    this.identifyIncidentHeading = page.getByText(
      'How do I identify an incident?'
    );

    // Incident Categories
    this.errorsSection = page.getByText(/^Errors:/);
    this.omissionsSection = page.getByText(/^Omissions:/);
    this.demandsSection = page.getByText(/^Demands:/);
    this.inquiriesSection = page.getByText(/^Out of the Ordinary Inquiries:/);

    // start Button
    this.startButton = page.getByRole('button', {name: 'Start'});

    // Footer
    this.copyrightText = page.getByText(/copyright/i);
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.whatIsSurveyHeading).toBeVisible();
  }

  async verifyUserLoggedIn(email: string): Promise<void> {
    await expect(this.userEmail).toContainText(email);
  }

  async openAdmin(): Promise<void> {
    await this.adminLink.click();
  }

  async signOut(): Promise<void> {
    await this.signOutLink.click();
  }

  async verifyIncidentSectionsPresent(): Promise<void> {
    await expect(this.errorsSection).toBeVisible();
    await expect(this.omissionsSection).toBeVisible();
    await expect(this.demandsSection).toBeVisible();
    await expect(this.inquiriesSection).toBeVisible();
  }
}