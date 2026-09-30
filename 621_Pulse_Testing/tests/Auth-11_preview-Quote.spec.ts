import { test, expect } from "@playwright/test";
import { TopSidePanelPage } from "./page-objects/top-side-panel-page.pom.ts";
import { InsuranceApplicationsPage } from "./page-objects/insuranceApplications-page.pom.ts";
import applications from "./data/applications.json";

test.describe("Insurance application - UW Tab", () => {
  let topSidePanelPage: TopSidePanelPage;
  let insuranceAppPage: InsuranceApplicationsPage;
  let pagesQty: number = 1;
  
  applications.forEach(({ appId, appNo, categoryName, policyType }) => {
    test(`Preview Quote test for app no: ${appNo} - ${categoryName} - ${policyType}`, async ({
      page,
    }) => {
      topSidePanelPage = new TopSidePanelPage(page);
      insuranceAppPage = new InsuranceApplicationsPage(page);
      await page.goto(
        `https://pulse-dev.bbrownretapps.com/InsuranceApp/${appId}`,
      );

      await page.setViewportSize({ width: 1920, height: 1080 }); // set viewport size to 1920x1080 to ensure all elements are visible and avoid responsive design issues

      await topSidePanelPage.contactUsLink.selectText(); // auto-wait for the 'Contact Us' link to be visible and enabled

      await insuranceAppPage.documentsTab.click(); // click the 'Documents' tab to view the list of documents associated with the application
      await page.waitForTimeout(500); // wait for 0.5 seconds to ensure the file preview modal is fully loaded and the PDF document is rendered
      await page.getByRole("button", { name: "View" }).last().selectText(); // auto-wait for the 'View' button to be visible and enabled
      await expect(page.getByRole("button", { name: "View" }).last()).toBeVisible(); // auto-wait for the 'View' button to be visible and enabled
      await page.getByRole("button", { name: "View" }).last().click();
      
      await page.waitForTimeout(6000); // wait for 6.0 seconds to ensure the file preview modal is fully loaded and the PDF document is rendered
      await page.locator('canvas').first().hover({ timeout: 15000 }); // hover over the PDF viewer to trigger any potential lazy loading of the PDF content;
      await page.locator('canvas').first().click({ timeout: 15000 }); // click the PDF viewer to trigger any potential lazy loading of the PDF content;
      await page.waitForTimeout(1000); // wait for 1.0 seconds to ensure the file preview modal is fully loaded and the PDF document is rendered
      
      // Find the number of pages in the PDF document by checking the visibility of the thumbnail canvases in the file preview modal
      /**
      if (await page.locator('canvas').nth(3).isVisible()) { 
        pagesQty = 4; 
      } else if (await page.locator('canvas').nth(2).isVisible()) {
        pagesQty = 3; 
      } else if (await page.locator('canvas').nth(1).isVisible()) {
        pagesQty = 2; 
      } else {
        pagesQty = 1; 
      }
      */
      
      for (let i = 0; i < pagesQty; i++) {
        try {
          if (i > 0 ) {
            await page.locator('canvas').nth(i).click({ timeout: 5000 }); // click the 'Next Page' button
            await page.waitForTimeout(1000); // wait for 1.0 seconds to ensure the file preview modal is fully loaded and the PDF document is rendered
          }
          
          await page.locator('.blazorpdf-pdf > div:nth-child(3)').hover({ timeout: 5000 }); // hover over the PDF viewer to trigger any potential lazy loading of the PDF content;
          await expect(page).toHaveScreenshot({ clip: { x: 645, y: 190, width: 630, height: 810 }, maxDiffPixels: 35 }); // capture screenshot and compare with baseline, allowing for a 5% difference threshold

        } catch (error) {
          throw error;
        }
      }

      // await page.getByRole("button", { name: "Close" }).click({ timeout: 10000 }); // click the 'Close' button to close the file preview modal

    });
  });
});