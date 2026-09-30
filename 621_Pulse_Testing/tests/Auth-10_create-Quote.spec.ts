import { test, expect } from "@playwright/test";
import { TopSidePanelPage } from "./page-objects/top-side-panel-page.pom.ts";
import { InsuranceApplicationsPage } from "./page-objects/insuranceApplications-page.pom.ts";
import applications from "./data/applications.json";

test.describe("Insurance application - UW Tab", () => {
  let topSidePanelPage: TopSidePanelPage;
  let insuranceAppPage: InsuranceApplicationsPage;
  
  applications.forEach(({ appId, appNo, categoryName, policyType, ManualEndorsement }) => {
    test(`Create Quote test for app no: ${appNo} - ${categoryName} - ${policyType}`, async ({
      page,
    }) => {
      topSidePanelPage = new TopSidePanelPage(page);
      insuranceAppPage = new InsuranceApplicationsPage(page);
      await page.goto(
        `https://pulse-dev.bbrownretapps.com/InsuranceApp/${appId}`,
      );
      
      await topSidePanelPage.contactUsLink.selectText(); // auto-wait for the 'Contact Us' link to be visible and enabled
      await insuranceAppPage.underwritingTab.click(); // click the 'Documents' tab with a delay to ensure the 'View' button is loaded and clickable
      await insuranceAppPage.quoteAppUWButton.click(); // click the 'Quote Application' button to open the 'Create Quote' dialog box

      if (ManualEndorsement) {
        await insuranceAppPage.addManualJUA55YesCheckbox.click();
        await insuranceAppPage.manualJUA55Textbox.fill("Manual JUA55 Text for Quote Document");
      }

      await insuranceAppPage.createQuoteButton.click(); // click the 'Create Quote' button to create the quote document
      await page.waitForTimeout(4000); // wait for 4.0 seconds to ensure the quote document is created and the 'View' button is updated in the UI
      
      await expect(page).toHaveScreenshot({ clip: { x: 0, y: 0, width: 1280, height: 225 }, maxDiffPixels: 25 }); // capture screenshot and compare with baseline, allowing for a 5% difference threshold

    });
  });
});