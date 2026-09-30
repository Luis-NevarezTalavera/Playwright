// Default HOME PAGE TESTS using Playwright and Page Object Model (POM)
// NOT LOGGED IN YET
// This file contains tests for the home page of the Pulse application.
// The tests verify the visibility of various elements on the home page and navigation functionality.

import { test, expect } from '@playwright/test';
import { NewsFirstNotLoggedInPage } from './page-objects/News1st-NotLoggedIn-page.pom';

test.describe('News 1st Page - not Logged In', () => {
  let newsFirstNotLoggedInPage: NewsFirstNotLoggedInPage;

  test.beforeEach(async ({ page }) => {
    newsFirstNotLoggedInPage = new NewsFirstNotLoggedInPage(page);
    await newsFirstNotLoggedInPage.navigate();
  });

  test('Verify that the elements on the BLUE TOP BAR are visible on the page', async () => {
    // Verify that the page has loaded and the expected elements are visible on the BLUE TOP BAR
      await newsFirstNotLoggedInPage.MMJUALink.waitFor({ state: 'visible' });
      await expect(newsFirstNotLoggedInPage.MMJUALink, "MMJUALink should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.aboutUsLink, "aboutUsLink should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.claimsLink, "claimsLink should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.productsLink, "productsLink should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.riskManagementLink, "riskManagementLink should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.faqsLink, "faqsLink should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.contactUsLink, "contactUsLink should be visible").toBeVisible();
    });
    
    test('Verify that the elements on the PDF Viewer are visible on the page', async () => {
      // Verify that the PDF viewer controls and elements are visible on the PDF Viewer
      await expect(newsFirstNotLoggedInPage.qaNewsHeading, "qaNewsHeading should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.documentHeading, "documentHeading should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.showThumbnailsButton, "showThumbnailsButton should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.previousPageButton, "previousPageButton should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.nextPageButton, "nextPageButton should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.spinButton, "spinButton should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.zoomOutButton, "zoomOutButton should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.zoomInButton, "zoomInButton should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.menuActivatorButton, "menuActivatorButton should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.thumbnailFirstPage, "thumbnailFirstPage should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.pdfDocumentFirstPage, "pdfDocumentFirstPage should be visible").toBeVisible();
      await expect(newsFirstNotLoggedInPage.backToHomeButton, "backToHomeButton should be visible").toBeVisible();
    });

    test('Clicking MMJUALink should navigate to the Home page', async () => {
      await newsFirstNotLoggedInPage.MMJUALink.click();
      await newsFirstNotLoggedInPage['page'].waitForTimeout(2000); // Wait for the login page to load before asserting the URL)
      await expect(newsFirstNotLoggedInPage['page'],"Default page").toHaveURL("https://pulse-dev.bbrownretapps.com/");
    });

});