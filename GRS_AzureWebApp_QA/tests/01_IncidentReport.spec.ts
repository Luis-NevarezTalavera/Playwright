import { test } from '@playwright/test';
import { IncidentReportPage } from './page-objects/IncidentReport.pom';

test('submit incident report', async ({ page }) => {
  const incidentReport = new IncidentReportPage(page);

  await incidentReport.goto();
  await incidentReport.verifyPageLoaded();

  await incidentReport.fillIncidentReport({
    groupCompany: 'Retail',
    lossName: 'Test Loss',
    profitCentre: 'PC001',
    notificationType: 'Claim',
    firstAwarenessDate: '08/14/2026',
    description: 'Sample incident description',
    underlyingInsurer: 'ABC Insurance',
    categoryOfEO: 'Underinsurance',
    exposure: 'Probable'
  });
});