import { test, expect } from '@playwright/test';
import { UnderWriterDashboardPage } from './page-objects/underwriter-dashboard-page.pom.ts';
import { TopSidePanelPage } from './page-objects/top-side-panel-page.pom.ts';

test.describe('Dashboard page', () => {
  let underWriterDashboardPage: UnderWriterDashboardPage;
  let topSidePanelPage: TopSidePanelPage;
  
  test.beforeEach(async ({ page }) => {
    underWriterDashboardPage = new UnderWriterDashboardPage(page);
    topSidePanelPage = new TopSidePanelPage(page);
    await underWriterDashboardPage.navigate();
  });

  test('Verify TOP BAR Elements and URL', async () => {
    await expect(topSidePanelPage.page,"page").toHaveURL("https://pulse-dev.bbrownretapps.com/Dashboard/");
    await expect(topSidePanelPage.sideMenu,"sideMenu").toBeVisible();
    await expect(topSidePanelPage.MMJUALink,"MMJUALink").toBeVisible();
    await expect(topSidePanelPage.userLink,"userLink").toBeVisible();
    await expect(topSidePanelPage.logOutTopButton,"logOutTopButton").toBeVisible();
  });
  
  test('Verify Underwriter Side Panel Menu and URL', async () => {
    await expect(topSidePanelPage.dashboardLink,"dashboardLink").toBeVisible();
    await expect(topSidePanelPage.insuredsLink,"insuredsLink").toBeVisible();
    await expect(topSidePanelPage.agenciesLink,"agenciesLink").toBeVisible();
    await expect(topSidePanelPage.userListsLink,"userListsLink").toBeVisible();
    await expect(topSidePanelPage.policiesListsLink,"policiesListsLink").toBeVisible();
    await expect(topSidePanelPage.newsandupdatesListLink,"newsandupdatesListLink").toBeVisible();
  });

  test('Underwriter Dashboard', async () => {
    // Use selectText() on the last page element to ensure the whole page is interactable and visible before performing assertions
    await underWriterDashboardPage.appsQuoteDeclineRequoteButton.selectText();

    // Verify the elements on the Underwriter Dashboard, Headers and Buttons
    await expect(underWriterDashboardPage.dashboardHeading,"dashboardHeading").toBeVisible();
    await expect(underWriterDashboardPage.appsGLElectedButton,"appsGLElectedButton").toBeVisible();
    await expect(underWriterDashboardPage.appsExpiring60daysButton,"appsExpiring60daysButton").toBeVisible();
    await expect(underWriterDashboardPage.appsExpired30daysButton,"appsExpired30daysButton").toBeVisible();
    await expect(underWriterDashboardPage.appsPartTimeElectedButton,"appsPartTimeElectedButton").toBeVisible();
    await expect(underWriterDashboardPage.appsClaimsMadeButton,"appsClaimsMadeButton").toBeVisible();
    await expect(underWriterDashboardPage.appsOccurrenceButton,"appsOccurrenceButton").toBeVisible();
    await expect(underWriterDashboardPage.appsHealthProfessionalButton,"appsHealthProfessionalButton").toBeVisible();
    await expect(underWriterDashboardPage.appsPhysicianSurgeonButton,"appsPhysicianSurgeonButton").toBeVisible();
    await expect(underWriterDashboardPage.appsFacilityButton,"appsFacilityButton").toBeVisible();

    await expect(underWriterDashboardPage.appsAwaitingReviewButton,"appsAwaitingReviewButton").toBeVisible();
    await expect(underWriterDashboardPage.appsValidatedButton,"appsValidatedButton").toBeVisible();
    await expect(underWriterDashboardPage.quotesIssuedButton,"quotesIssuedButton").toBeVisible();
    await expect(underWriterDashboardPage.quotesAcceptedButton,"quotesAcceptedButton").toBeVisible();
    await expect(underWriterDashboardPage.appsCoverageDeniedButton,"appsCoverageDeniedButton").toBeVisible();
    await expect(underWriterDashboardPage.appsBoundButton,"appsBoundButton").toBeVisible();
    await expect(underWriterDashboardPage.appsPolicyIssuedButton,"appsPolicyIssuedButton").toBeVisible();
    await expect(underWriterDashboardPage.appsQuoteDeclineRequoteButton,"appsQuoteDeclineRequoteButton").toBeVisible();
  });
  
  test('Verify Admin Side Panel Menu', async () => {
    if (process.env.USER_TYPE === 'admin') {
      await expect(topSidePanelPage.toggleAdminButton,"toggleAdminButton").toBeVisible();
      await topSidePanelPage.toggleAdminButton.click({ force: true });
      await topSidePanelPage.page.waitForTimeout(1000);
      expect(topSidePanelPage.adminUserListLink, "adminUserListLink").toBeDefined();
      expect(topSidePanelPage.appTemplatesLink,"appTemplatesLink").toBeDefined();
      expect(topSidePanelPage.HangfireLink,"HangfireLink").toBeDefined();
      expect(topSidePanelPage.registrationTestLink,"registrationTestLink").toBeDefined();

      await topSidePanelPage.userListsLink.click();
      await topSidePanelPage.page.waitForTimeout(1000);
      await expect(topSidePanelPage.usersByRolesListButton,"usersByRolesListButton").toBeVisible();
      await expect(topSidePanelPage.addNewUserButton,"addNewUserButton").toBeVisible();
    }
  });
  
  test('Verify clicking MMJUA icon it takes to the Underwriter Dashboard', async () => {
    await topSidePanelPage.MMJUALink.click();
    await expect(topSidePanelPage.page,"page").toHaveURL("https://pulse-dev.bbrownretapps.com/Dashboard/");
  });

});