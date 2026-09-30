import { expect, Locator, Page } from '@playwright/test';

export interface ReportingOfficeData {
  profitCenterName: string;
  profitCenterNumber: string;
  costCenterNumber: string;
  regionDivision: string;
  submittedBy: string;
  teammatesWorkingOnAccount: string;
  dateDiscovered: string;
  bestContactPhone?: string;
  contactEmail?: string;
  officeLeaderManager: string;
}

export class ReportingOfficePage {
  readonly page: Page;

  readonly profitCenterName: Locator;
  readonly profitCenterNumber: Locator;
  readonly costCenterNumber: Locator;
  readonly regionDivision: Locator;
  readonly submittedBy: Locator;
  readonly teammatesWorkingOnAccount: Locator;
  readonly dateDiscovered: Locator;
  readonly bestContactPhone: Locator;
  readonly contactEmail: Locator;
  readonly officeLeaderManager: Locator;

  constructor(page: Page) {
    this.page = page;

    this.profitCenterName = page.getByLabel('Profit Center Name:', { exact: false, });
    this.profitCenterNumber = page.getByLabel('Profit Center #:', { exact: false, });
    this.costCenterNumber = page.getByLabel('Cost Center #:', { exact: false, });
    this.regionDivision = page.getByLabel('Region / Division:', { exact: false, });
    this.submittedBy = page.getByLabel('Submitted By:', { exact: false, });
    this.teammatesWorkingOnAccount = page.getByLabel( 'Names of BB Office Teammates Working on Underlying Account', { exact: false });
    this.dateDiscovered = page.getByLabel('Date Discovered:', { exact: false, });
    this.bestContactPhone = page.getByLabel('Best Contact Phone:', { exact: false, });
    this.contactEmail = page.getByLabel('Contact E-mail:', { exact: false, });
    this.officeLeaderManager = page.getByLabel( 'Office Leader / Manager', { exact: false });
  }

  async fill(data: ReportingOfficeData): Promise<void> {
    await this.profitCenterName.fill(data.profitCenterName);
    await this.profitCenterNumber.fill(data.profitCenterNumber);
    await this.costCenterNumber.fill(data.costCenterNumber);
    await this.regionDivision.fill(data.regionDivision);
    await this.submittedBy.fill(data.submittedBy);
    await this.teammatesWorkingOnAccount.fill( data.teammatesWorkingOnAccount );
    await this.dateDiscovered.fill(data.dateDiscovered);
    if (data.bestContactPhone) { await this.bestContactPhone.fill(data.bestContactPhone); }
    if (data.contactEmail) { await this.contactEmail.fill(data.contactEmail); }
    await this.officeLeaderManager.fill(data.officeLeaderManager);
  }

  async verifySectionLoaded(): Promise<void> {
    await expect(this.profitCenterName).toBeVisible();
    await expect(this.officeLeaderManager).toBeVisible();
  }

  async validateRequiredFields(): Promise<void> {
    await expect(this.profitCenterName).toBeVisible();
    await expect(this.profitCenterNumber).toBeVisible();
    await expect(this.costCenterNumber).toBeVisible();
    await expect(this.regionDivision).toBeVisible();
    await expect(this.submittedBy).toBeVisible();
    await expect(this.teammatesWorkingOnAccount).toBeVisible();
    await expect(this.dateDiscovered).toBeVisible();
    await expect(this.officeLeaderManager).toBeVisible();

    await expect(this.profitCenterName).toHaveAttribute('required', /true|/);
    await expect(this.profitCenterNumber).toHaveAttribute('required', /true|/);
    await expect(this.costCenterNumber).toHaveAttribute('required', /true|/);
    await expect(this.regionDivision).toHaveAttribute('required', /true|/);
    await expect(this.submittedBy).toHaveAttribute('required', /true|/);
    await expect(this.teammatesWorkingOnAccount).toHaveAttribute( 'required', /true|/ );
    await expect(this.dateDiscovered).toHaveAttribute('required', /true|/);
    await expect(this.officeLeaderManager).toHaveAttribute( 'required', /true|/ );
  }

  async verifyValues(data: ReportingOfficeData): Promise<void> {
    await expect(this.profitCenterName).toHaveValue( data.profitCenterName );
    await expect(this.profitCenterNumber).toHaveValue( data.profitCenterNumber );
    await expect(this.costCenterNumber).toHaveValue( data.costCenterNumber );
    await expect(this.regionDivision).toHaveValue( data.regionDivision );
    await expect(this.submittedBy).toHaveValue( data.submittedBy );
    await expect(this.teammatesWorkingOnAccount).toHaveValue( data.teammatesWorkingOnAccount );
    await expect(this.officeLeaderManager).toHaveValue( data.officeLeaderManager );
  }
}