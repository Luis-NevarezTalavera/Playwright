import { expect, Locator, Page } from '@playwright/test';

export enum SupportingDocumentType {
  EmailCorrespondence = 'Email correspondence',
  Screenshots = 'Screenshots',
  DemandLetterComplaint = 'Demand letter / complaint',
  SubpoenaAgencyNotice = 'Subpoena / agency notice',
  ContractAgreementLease = 'Contract / agreement / lease',
  PolicyCertificateBinder = 'Policy / certificate / binder',
  ClientFileNotes = 'Client file notes',
  SystemLogsITTickets = 'System logs / IT tickets',
  PhotosVideo = 'Photos / video',
  WitnessStatements = 'Witness statements',
  InvoicesFinancialRecords = 'Invoices / financial records'
}

export class SupportingDocumentsSection {
  readonly page: Page;

  readonly emailCorrespondence: Locator;
  readonly screenshots: Locator;
  readonly demandLetterComplaint: Locator;
  readonly subpoenaAgencyNotice: Locator;
  readonly contractAgreementLease: Locator;
  readonly policyCertificateBinder: Locator;
  readonly clientFileNotes: Locator;
  readonly systemLogsTickets: Locator;
  readonly photosVideo: Locator;
  readonly witnessStatements: Locator;
  readonly invoicesFinancialRecords: Locator;
  readonly availableDocumentsDescription: Locator;
  
  constructor(page: Page) {
    this.page = page;

    this.emailCorrespondence = page.getByRole('checkbox', { name: /email correspondence/i });
    this.screenshots = page.getByRole('checkbox', { name: /screenshots/i });
    this.demandLetterComplaint = page.getByRole('checkbox', { name: /demand letter/i });
    this.subpoenaAgencyNotice = page.getByRole('checkbox', { name: /subpoena.*agency notice/i });
    this.contractAgreementLease = page.getByRole('checkbox', { name: /contract.*agreement.*lease/i });
    this.policyCertificateBinder = page.getByRole('checkbox', { name: /policy.*certificate.*binder/i });
    this.clientFileNotes = page.getByRole('checkbox', { name: /client file notes/i });
    this.systemLogsTickets = page.getByRole('checkbox', { name: /system logs.*it tickets/i });
    this.photosVideo = page.getByRole('checkbox', { name: /photos.*video/i });
    this.witnessStatements = page.getByRole('checkbox', { name: /witness statements/i });
    this.invoicesFinancialRecords = page.getByRole('checkbox', { name: /invoices.*financial records/i });
    this.availableDocumentsDescription = page.getByLabel( /identify documents currently available or being gathered/i );
  }

  async selectDocuments( documents: SupportingDocumentType[] ): Promise<void> {
    for (const document of documents) {
      await this.page.getByRole('checkbox', { name: new RegExp(document, 'i') }) .check();
    }
  }

  async enterAvailableDocuments( description: string ): Promise<void> {
    await this.availableDocumentsDescription.fill(description);
  }

  async validateLoaded(): Promise<void> {
    await expect( this.availableDocumentsDescription ).toBeVisible();
  }

  async verifyAtLeastOneDocumentSelected(): Promise<void> {
    const checkedCount = await this.page.locator('input[type="checkbox"]:checked').count();
    expect(checkedCount).toBeGreaterThan(0);
  }

  async completeDefaultDocuments(): Promise<void> {
    await this.selectDocuments([
      SupportingDocumentType.EmailCorrespondence,
      SupportingDocumentType.ClientFileNotes,
      SupportingDocumentType.PolicyCertificateBinder
    ]);

    await this.enterAvailableDocuments( 'Emails, client notes and policy documents collected and available for legal review.');
  }
}