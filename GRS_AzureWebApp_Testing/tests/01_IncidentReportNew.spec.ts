import { test, expect, Page } from '@playwright/test';
import { IncidentReportPage } from './page-objects/IncidentReportNew.pom';
import { ReportingOfficeData } from './page-objects/IncRepReportingOfficeSection.pom';

test.describe('Global Risk Survey - Conditional Sections', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/Survey/IncidentReport');
  });

  // ======================================================
  // SECTION 1 - Reporting Office / Contact Information
  // ======================================================

  test('Section 1. Reporting Office - Validate Required Fields, ', async ({ page }) => {

    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();

    await incidentReport.reportingOffice.verifySectionLoaded();
    await incidentReport.reportingOffice.validateRequiredFields();

    const testData: ReportingOfficeData = {
      profitCenterName: 'Orange County',
      profitCenterNumber: '12345',
      costCenterNumber: '54321',
      regionDivision: 'Western Region',
      submittedBy: 'Luis Talavera',
      teammatesWorkingOnAccount:
      'John Smith - Producer, Jane Doe - Account Manager',
      dateDiscovered: '09/09/2026',
      bestContactPhone: '555-555-1212',
      contactEmail: 'luis.talavera@bbrown.com',
      officeLeaderManager: 'Susan Nouse'
    };
    
    // Fill the form with test data
    await incidentReport.reportingOffice.fill(testData);

    // Compare the form's data with test data
    await incidentReport.reportingOffice.verifyValues(testData);
    
  });

  // ======================================================
  // SECTION 2 - Incident Category
  // ======================================================

  test('Section 2. Incident Category is Selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.ErrorsAndOmissonsCheckbox.check();
    await incidentReport.errorAndOmissions.validateRequiredFields();
  });

  // ======================================================
  // SECTION 3 - ERRORS & OMISSIONS
  // ======================================================

  test('Section 3 should display when Errors & Omissions is selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.ErrorsAndOmissonsCheckbox.check();
    await incidentReport.errorAndOmissions.validateRequiredFields();
  });

  test('Section 3 required fields should validate', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.ErrorsAndOmissonsCheckbox.check();
    await incidentReport.completeBtn.click();
    await expect( page.getByText(/required/i) ).toBeVisible();
  });

  // ======================================================
  // SECTION 4 - CYBER SECURITY
  // ======================================================

  test('Section 4 should display when Cyber Security is selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.CyberSecurityCheckbox.check();
    await incidentReport.cyberSecurity.validateRequiredFields();
  });

  test('Section 4 required fields should validate', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.CyberSecurityCheckbox.check();
    await incidentReport.completeBtn.click();
    await expect( page.getByText(/required/i) ).toBeVisible();
  });

  // ======================================================
  // SECTION 5 - EMPLOYMENT MATTER
  // ======================================================

  test('Section 5 should display when Employment Matter is selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.EmploymentMatterCheckbox.check();
    await incidentReport.employment.validateRequiredFields();
  });

  test('Section 5 required fields should validate', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.EmploymentMatterCheckbox.check();
    await incidentReport.completeBtn.click();
    await expect( page.getByText(/required/i) ).toBeVisible();
  });

  // ======================================================
  // SECTION 6 - CONTRACTS
  // ======================================================

  test('Section 6 should display when Contracts is selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.ContractIncidentCheckbox.check();
    await incidentReport.contracts.validateRequiredFields();
  });

  test('Section 6 required fields should validate', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.ContractIncidentCheckbox.check();
    await incidentReport.completeBtn.click();
    await expect( page.getByText(/required/i) ).toBeVisible();
  });

  // ======================================================
  // SECTION 7 - REGULATORY
  // ======================================================

  test('Section 7 should display when Regulatory is selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.RegulatoryComplianceCheckbox.check();
    await incidentReport.regulatory.validateRequiredFields();
  });

  test('Section 7 required fields should validate', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.RegulatoryComplianceCheckbox.check();
    await incidentReport.completeBtn.click();
    await expect( page.getByText(/required/i) ).toBeVisible();
  });

  // ======================================================
  // SECTION 8 - LANDLORD TENANT
  // ======================================================

  test('Section 8 should display when Landlord/Tenant is selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.LandlordTenantCheckbox.check();
    await incidentReport.landlord.validateRequiredFields();
  });

  test('Section 8 required fields should validate', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.LandlordTenantCheckbox.check();
    await incidentReport.completeBtn.click();
    await expect( page.getByText(/required/i) ).toBeVisible();
  });

  // ======================================================
  // SECTION 9 - DEMAND LETTER
  // ======================================================

  test('Section 9 should display when Demand Letter is selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.DemandLetterCheckbox.check();
    await incidentReport.legal.validateRequiredFields();
  });

  test('Section 9 required fields should validate for Demand Letter', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.DemandLetterCheckbox.check();
    await incidentReport.completeBtn.click();
    await expect( page.getByText(/required/i) ).toBeVisible();
  });

  // ======================================================
  // SECTION 9 - SUBPOENA
  // ======================================================

  test('Section 9 should display when Subpoena is selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.SubpoenaCheckbox.check();
    await incidentReport.legal.validateRequiredFields();
  });

  test('Section 9 required fields should validate for Subpoena', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.SubpoenaCheckbox.check();
    await incidentReport.completeBtn.click();
    await expect( page.getByText(/required/i) ).toBeVisible();
  });

  // ======================================================
  // MULTI SECTION VALIDATIONS
  // ======================================================

  test('multiple selected categories should display multiple sections', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.ErrorsAndOmissonsCheckbox.check();
    await incidentReport.incidentCategory.ContractIncidentCheckbox.check();
    await incidentReport.incidentCategory.DemandLetterCheckbox.check();
    await incidentReport.errorAndOmissions.validateRequiredFields();
    await incidentReport.contracts.validateRequiredFields();
    await incidentReport.legal.validateRequiredFields();
  });

  test('all conditional sections should display when all categories selected', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.ErrorsAndOmissonsCheckbox.check();
    await incidentReport.incidentCategory.ContractIncidentCheckbox.check();
    await incidentReport.incidentCategory.DemandLetterCheckbox.check();
    await incidentReport.incidentCategory.ContractIncidentCheckbox.check();
    await incidentReport.incidentCategory.RegulatoryComplianceCheckbox.check();
    await incidentReport.incidentCategory.LandlordTenantCheckbox.check();
    await incidentReport.incidentCategory.DemandLetterCheckbox.check();
    await incidentReport.errorAndOmissions.validateRequiredFields();
    await incidentReport.cyberSecurity.validateRequiredFields();
    await incidentReport.employment.validateRequiredFields();
    await incidentReport.contracts.validateRequiredFields();
    await incidentReport.regulatory.validateRequiredFields();
    await incidentReport.landlord.validateRequiredFields();
    await incidentReport.legal.validateRequiredFields();
  });

  // ======================================================
  // GLOBAL FORM RULES
  // ======================================================

  test('Section 10 should always be required', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.supportingDocuments.validateLoaded();
  });

  test('Section 11 should always be required', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await expect( incidentReport.actionTaken.actionTakenToDate ).toBeVisible();
    await expect( incidentReport.actionTaken.suggestedNextSteps ).toBeVisible();
  });

  async function fillRequiredFields(page: Page, data: {
    profitCenterName: string;
    profitCenterNumber: string;
    regionDivision: string;
    submittedBy: string;
    teammatesWorkingOnAccount: string;
    dateDiscovered: string;
    officeLeaderManager: string;
  }) {
    await page.getByLabel(/profit center name/i).fill(data.profitCenterName);
    await page.getByLabel(/profit center number/i).fill(data.profitCenterNumber);
    await page.getByLabel(/region.*division/i).fill(data.regionDivision);
    await page.getByLabel(/submitted by/i).fill(data.submittedBy);
    await page.getByLabel(/teammates working on account/i).fill(data.teammatesWorkingOnAccount);
    await page.getByLabel(/date discovered/i).fill(data.dateDiscovered);
    await page.getByLabel(/office leader.*manager/i).fill(data.officeLeaderManager);
  }

  test('submission should fail when category section is incomplete', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await incidentReport.incidentCategory.ErrorsAndOmissonsCheckbox.check();
    await fillRequiredFields(page, {
      profitCenterName: 'Risk Solutions',
      profitCenterNumber: '621',
      regionDivision: 'West',
      submittedBy: 'Luis Talavera',
      teammatesWorkingOnAccount: 'QA Tester',
      dateDiscovered: '08/31/2026',
      officeLeaderManager: 'Susan Nouse'
    });
    
    // Click the Complete button to submit the form
    await incidentReport.completeBtn.click();

    await expect(
      page.getByText(/required|validation/i)
    ).toBeVisible();
  });

  test('valid submission should succeed', async ({ page }) => {
    const incidentReport = new IncidentReportPage(page);
    await incidentReport.nextBtn.click();
    await fillRequiredFields(page, {
      profitCenterName: 'Risk Solutions',
      profitCenterNumber: '621',
      regionDivision: 'West',
      submittedBy: 'Luis Talavera',
      teammatesWorkingOnAccount: 'Account Manager',
      dateDiscovered: '08/31/2026',
      officeLeaderManager: 'Susan Nouse'
    });

    await incidentReport.incidentCategory.ErrorsAndOmissonsCheckbox.check();

    // Fill Section 3 here
    await incidentReport.actionTaken.actionTakenToDate.fill( 'Initial review completed' );
    await incidentReport.actionTaken.suggestedNextSteps.fill( 'Legal review requested' );

    // Click the Complete button to submit the form
    await incidentReport.completeBtn.click();

    // Verify that the submission was successful
    await expect( page.getByText(/submitted|success|thank you/i) ).toBeVisible();
  });
});