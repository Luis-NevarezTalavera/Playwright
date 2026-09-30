import { expect, Locator, Page } from '@playwright/test';

export class IncidentcategoryPage {
  readonly page: Page;

  readonly ErrorsAndOmissonsCheckbox: Locator;
  readonly EmploymentMatterCheckbox: Locator;
  readonly RegulatoryComplianceCheckbox: Locator;
  readonly CyberSecurityCheckbox: Locator;
  readonly ContractIncidentCheckbox: Locator;
  readonly LandlordTenantCheckbox: Locator;
  readonly DemandLetterCheckbox: Locator;
  readonly SubpoenaCheckbox: Locator;
  
  
  constructor(page: Page) {
    this.page = page;

    this.ErrorsAndOmissonsCheckbox = page.getByRole('checkbox', { name: /errors & omissions/i });
    this.EmploymentMatterCheckbox = page.getByRole('checkbox', { name: /employment matter/i });
    this.RegulatoryComplianceCheckbox = page.getByRole('checkbox', { name: /regulatory.*compliance/i });
    this.CyberSecurityCheckbox = page.getByRole('checkbox', { name: /cybersecurity/i });
    this.ContractIncidentCheckbox = page.getByRole('checkbox', { name: /contracts/i });
    this.LandlordTenantCheckbox = page.getByRole('checkbox', { name: /landlord\/tenant/i });
    this.DemandLetterCheckbox = page.getByRole('checkbox', { name: /demand letter/i });
    this.SubpoenaCheckbox = page.getByRole('checkbox', { name: /subpoena/i });
    
  }
  
}