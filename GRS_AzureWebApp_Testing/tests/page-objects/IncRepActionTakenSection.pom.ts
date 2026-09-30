import { expect, Locator, Page } from '@playwright/test';

export interface ActionTakenData {
  actionTaken: string;
  legalContact?: string;
  assistanceRequested: string;
}

export class ActionTakenSection {
  readonly page: Page;

  readonly actionTakenToDate: Locator;
  readonly legalTeamContactName: Locator;
  readonly suggestedNextSteps: Locator; 

  constructor(page: Page) {
    this.page = page;

    this.actionTakenToDate = page.getByLabel(/action taken to date/i);
    this.legalTeamContactName = page.getByLabel(/legal team contact name/i);
    this.suggestedNextSteps = page.getByLabel(/suggested next steps.*assistance requested/i);
  }
  
  async fill(
    data: ActionTakenData
  ): Promise<void> {

    await this.actionTakenToDate.fill(
      data.actionTaken
    );

    if (data.legalContact) {
      await this.legalTeamContactName.fill(
        data.legalContact
      );
    }

    await this.suggestedNextSteps.fill(
      data.assistanceRequested
    );
  }

  async validateRequiredFields(): Promise<void> {
    await expect(
      this.actionTakenToDate
    ).toBeVisible();

    await expect(
      this.suggestedNextSteps
    ).toBeVisible();
  }

  async validateCompleted(): Promise<void> {
    await expect(
      this.actionTakenToDate
    ).not.toHaveValue('');

    await expect(
      this.suggestedNextSteps
    ).not.toHaveValue('');
  }

  async completeDefaultActions(): Promise<void> {
    await this.fill({
      actionTaken:
        'Initial investigation completed. Account records reviewed and incident documented.',
        legalContact:
        'Susan Nouse',
      assistanceRequested:
      'Request legal review and guidance on next steps.'
    });
  }
}