// Global Risk Survey, Incident Report page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Incident Report page

import { expect, Locator, Page } from '@playwright/test';

export class IncidentReportPage {
  readonly page: Page;

  // Alert
  readonly responseRequiredAlert: Locator;

  // Notification
  readonly IncidentReportSubmittedSuccessfullyHeading: Locator;

  // Textboxes
  readonly groupCompanyTxt: Locator;
  readonly lossNameTxt: Locator;
  readonly profitCentreTxt: Locator;
  readonly emailTxt: Locator;
  readonly dateOfFirstAwarenessTxt: Locator;
  readonly dateOfLossTxt: Locator;
  readonly actualOrPotentialQuantumTxt: Locator;
  readonly actionToBeTakenByTxt: Locator;
  readonly signedByTxt: Locator;
  readonly datedTxt: Locator;

  // Text Areas
  readonly briefDescriptionTxt: Locator;
  readonly additionalInformationTxt: Locator;
  readonly nextStepsRequiredTxt: Locator;

  // Dropdowns / Comboboxes
  readonly underlyingInsurerTxt: Locator;
  readonly categoryOfEORbg: Locator;

  // Notification Type
  readonly claimRdo: Locator;
  readonly circumstanceRdo: Locator;

  // Exposure
  readonly highlyLikelyRdo: Locator;
  readonly probableRdo: Locator;
  readonly unlikelyRdo: Locator;
  readonly highlyUnlikelyRdo: Locator;

  // Buttons (adjust names as needed)
  readonly completeBtn: Locator;
  readonly previousBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    //Alert
    this.responseRequiredAlert = page.getByRole('alert', { description: 'Response required.' }); // name: ''

    // Notification
    this.IncidentReportSubmittedSuccessfullyHeading = page.getByRole( 'heading', {name: 'Incident Report Submitted Successfully'})

    // Textboxes
    this.groupCompanyTxt = page.getByLabel('Group Company');
    this.lossNameTxt = page.getByLabel('Loss Name');
    this.profitCentreTxt = page.getByLabel('Profit Centre');
    this.emailTxt = page.getByLabel('Email');
    this.dateOfFirstAwarenessTxt = page.getByLabel('Date of first awareness');
    this.dateOfLossTxt = page.getByLabel('Date of Loss');
    this.actualOrPotentialQuantumTxt = page.getByLabel('Actual or potential quantum');
    this.actionToBeTakenByTxt = page.getByLabel('Action to be taken by');
    this.signedByTxt = page.getByLabel('Signed By');
    this.datedTxt = page.getByLabel('Dated');

    // Text Areas
    this.briefDescriptionTxt = page.getByLabel('Brief description of the situation');
    this.additionalInformationTxt = page.getByLabel('Any additional information');
    this.nextStepsRequiredTxt = page.getByLabel('Next Steps Required');
    this.underlyingInsurerTxt = page.getByLabel('Underlying Insurer');

    // Radio buttons group for Category of E&O
    this.categoryOfEORbg = page.getByRole( 'radiogroup', {name: 'Category of E&O'} );

    // Notification Type
    this.claimRdo = page.getByLabel(/Claim/i);
    this.circumstanceRdo = page.getByLabel(/Circumstance/i);

    // Exposure
    this.highlyLikelyRdo = page.getByLabel('Highly Likely');
    this.probableRdo = page.getByLabel('Probable');
    this.unlikelyRdo = page.getByLabel('Unlikely');
    this.highlyUnlikelyRdo = page.getByLabel('Highly Unlikely');

    // Buttons
    this.completeBtn = page.getByRole('button', { name: 'Complete' });
    this.previousBtn = page.getByRole('button', { name: 'Previous' });
  }

  async goto(): Promise<void> {
    await this.page.goto('/Survey/IncidentReport');
  }

  async selectNotificationType( type: 'Claim' | 'Circumstance' ): Promise<void> {
    if (type === 'Claim') {
      await this.claimRdo.check();
    } else {
      await this.circumstanceRdo.check();
    }
  }

  async selectExposure( exposure: 'Highly Likely' | 'Probable' | 'Unlikely' | 'Highly Unlikely' ): Promise<void> {
    const exposures = {
      'Highly Likely': this.highlyLikelyRdo,
      'Probable': this.probableRdo,
      'Unlikely': this.unlikelyRdo,
      'Highly Unlikely': this.highlyUnlikelyRdo
    };

    await exposures[exposure].check();
  }

  // Possible values: 
  // Gap in Cover,  Non-disclosure of previous claims, Underinsurance, Unsuitable Policy, Renewal Missed, Fair representation, Onerous Terms, Non-disclosure of liquidations/sanctions, Exceeding Underwriting Authority, Late Referral
  async selectCategory(category: string): Promise<void> {
    await this.categoryOfEORbg.selectOption({
      label: category
    });
  }

  async selectUnderlyingInsurer(insurer: string): Promise<void> {
    await this.underlyingInsurerTxt.selectOption({
      label: insurer
    });
  }

  async fillIncidentReport(data: {
    groupCompany?: string;
    lossName?: string;
    profitCentre?: string;
    email?: string;
    notificationType?: 'Claim' | 'Circumstance';
    firstAwarenessDate?: string;
    lossDate?: string;
    description?: string;
    underlyingInsurer?: string;
    categoryOfEO?: string;
    actualOrPotentialQuantum?: string;
    exposure?: 'Highly Likely' | 'Probable' | 'Unlikely' | 'Highly Unlikely';
    additionalInformation?: string;
    nextStepsRequired?: string;
    actionToBeTakenBy?: string;
    signedBy?: string;
    dated?: string;
  }): Promise<void> {
    if (data.groupCompany)
      await this.groupCompanyTxt.fill(data.groupCompany);

    if (data.lossName)
      await this.lossNameTxt.fill(data.lossName);

    if (data.profitCentre)
      await this.profitCentreTxt.fill(data.profitCentre);

    if (data.email)
      await this.emailTxt.fill(data.email);

    if (data.notificationType)
      await this.selectNotificationType(data.notificationType);

    if (data.firstAwarenessDate)
      await this.dateOfFirstAwarenessTxt.fill(
        data.firstAwarenessDate
      );

    if (data.lossDate)
      await this.dateOfLossTxt.fill(data.lossDate);

    if (data.description)
      await this.briefDescriptionTxt.fill(
        data.description
      );

    if (data.underlyingInsurer)
      await this.selectUnderlyingInsurer(
        data.underlyingInsurer
      );

    if (data.categoryOfEO)
      await this.selectCategory(
        data.categoryOfEO
      );

    if (data.actualOrPotentialQuantum)
      await this.actualOrPotentialQuantumTxt.fill(
        data.actualOrPotentialQuantum
      );

    if (data.exposure)
      await this.selectExposure(data.exposure);

    if (data.additionalInformation)
      await this.additionalInformationTxt.fill(
        data.additionalInformation
      );

    if (data.nextStepsRequired)
      await this.nextStepsRequiredTxt.fill(
        data.nextStepsRequired
      );

    if (data.actionToBeTakenBy)
      await this.actionToBeTakenByTxt.fill(
        data.actionToBeTakenBy
      );

    if (data.signedBy)
      await this.signedByTxt.fill(data.signedBy);

    if (data.dated)
      await this.datedTxt.fill(data.dated);
  }
  
  async submit(): Promise<void> {
    await this.completeBtn.click();
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(
      this.page.getByText('GLOBAL RISK SURVEY AND INCIDENT REPORTING')
    ).toBeVisible();

    await expect(
      this.page.getByText('E&O CLAIM/CIRCUMSTANCE NOTIFICATION')
    ).toBeVisible();
  }
}