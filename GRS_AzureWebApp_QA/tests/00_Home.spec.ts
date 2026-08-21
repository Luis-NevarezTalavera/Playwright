// Default HOME PAGE TESTS using Playwright and Page Object Model (POM)
// NOT LOGGED IN YET
// This file contains tests for the home page of the Pulse application.
// The tests verify the visibility of various elements on the home page and navigation functionality.

import { test, expect } from '@playwright/test'; //chromium, BrowserContext
import { HomePage } from './page-objects/Home.pom';
import path from 'path';

test.describe('Home Page not Logged In', () => {
  let homePage: HomePage;
  // let browser: BrowserContext;
  let userDataDir = "C:\\Users\\Luis.Talavera\\AppData\\Local\\Microsoft\\Edge\\User Data";

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    // browser = await chromium.launchPersistentContext(userDataDir);
    await homePage.navigate();
  });

  test('Should display GRS page, login page', async () => {
    test.setTimeout(240000); // Set timeout to 3 minutes for this test
    
    /**
    4. Playwright tips
    Use page.setExtraHTTPHeaders to ensure cookies are sent correctly.
    Refresh cookies after redirects:
    */

    await homePage.page.waitForLoadState('networkidle');
    await homePage.page.reload({ waitUntil: 'networkidle' });
    
    // await homePage.page.waitForTimeout(30000);
    
    // Verify that the page has loaded and the expected elements are visible on the MAIN CONTENT
    await expect(homePage.GlobalRiskHeading).toBeVisible();
    await expect(homePage.EnterpriseSurveyLink).toBeVisible();
    await expect(homePage.IncidentReportLink).toBeVisible();
    await expect(homePage.LeadershipReportsLink).toBeVisible();
    await expect(homePage.SignInTopLink).toBeVisible();
    
    await homePage.SignInTopLink.click();
    await homePage.EmailTextbox.fill('luis.talavera@bbrown.com');
    await homePage.NextButton.click();
    await homePage.PasswordTextbox.fill('Aleluya001!@#$');
    await homePage.SignInButton.click({ timeout: 30000 });

    await homePage.page.waitForTimeout(60000);
    
    await expect(homePage.SwitchEdgeProfileButton).toBeVisible();

    // await homePage.SwitchEdgeProfileButton.click();
    // await homePage.SignInMSEdgeLink.click();
    // await homePage.SignInToSyncDataButton.click();

    // Define the path for the authentication file
    // This file will store the authenticated state after login
    const authFile = path.join(__dirname, `../.auth/userAuth.json`);

    // Save authenticated state
    await homePage.page.context().storageState({ path: authFile });

    /**
    await expect (homePage.UserEmailTopLink).toBeVisible();
    await expect (homePage.SignOutTopLink).toBeVisible();
    
    await homePage.IncidentReportLink.click();
    await homePage.navigate();
    await homePage.EnterpriseSurveyLink.click();
    await homePage.navigate();
    */

  });

});