import { Locator, Page } from '@playwright/test';

import { ReportingOfficePage } from './IncRepReportingOfficeSection.pom';           // Section 1
import { IncidentcategoryPage } from './IncRepIncidentCategorySection.pom';         // Section 2
import { ErrorsAndOmissionsSection } from './IncRepErrorsAndOmissionsSection.pom';  // Section 3
import { CyberSecuritySection } from './IncRepCyberSecuritySection.pom';            // Section 4
import { EmploymentMatterSection } from './IncRepEmploymentMatterSection.pom';      // Section 5
import { ContractsSection } from './IncRepContractsSection.pom';                    // Section 6
import { RegulatorySection } from './IncRepRegulatorySection.pom';                  // Section 7
import { LandlordTenantSection } from './IncRepLandlordTenantSection.pom';          // Section 8
import { LegalRequestSection } from './IncRepLegalRequestSection.pom';              // Section 9
import { SupportingDocumentsSection } from './IncRepSupportingDocumentsSection.pom'; // Section 10
import { ActionTakenSection } from './IncRepActionTakenSection.pom';                // Section 11

export class IncidentReportPage {
  readonly page: Page;

  readonly nextBtn: Locator;

  readonly incidentCategory: IncidentcategoryPage;
  readonly reportingOffice: ReportingOfficePage;
  readonly errorAndOmissions: ErrorsAndOmissionsSection;
  readonly cyberSecurity: CyberSecuritySection;
  readonly employment: EmploymentMatterSection;
  readonly contracts: ContractsSection;
  readonly regulatory: RegulatorySection;
  readonly landlord: LandlordTenantSection;
  readonly legal: LegalRequestSection;
  readonly supportingDocuments: SupportingDocumentsSection;
  readonly actionTaken: ActionTakenSection;

  readonly completeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.nextBtn = page.getByRole('button', { name: 'Next' });

    this.reportingOffice = new ReportingOfficePage(this.page);          // Section 1
    this.incidentCategory = new IncidentcategoryPage(this.page);        // Section 2
    this.errorAndOmissions = new ErrorsAndOmissionsSection(this.page);  // Section 3
    this.cyberSecurity = new CyberSecuritySection(this.page);           // Section 4
    this.employment = new EmploymentMatterSection(this.page);           // Section 5
    this.contracts = new ContractsSection(this.page);                   // Section 6
    this.regulatory = new RegulatorySection(this.page);                 // Section 7
    this.landlord = new LandlordTenantSection(this.page);               // Section 8
    this.legal = new LegalRequestSection(this.page);                    // Section 9
    this.supportingDocuments = new SupportingDocumentsSection(this.page); // Section 10
    this.actionTaken = new ActionTakenSection(this.page);               // Section 11
    
    this.completeBtn = page.getByRole('button', { name: 'Complete' });

  }
}