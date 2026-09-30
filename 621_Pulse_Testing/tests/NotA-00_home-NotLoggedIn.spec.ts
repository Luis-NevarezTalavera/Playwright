// Default HOME PAGE TESTS using Playwright and Page Object Model (POM)
// NOT LOGGED IN YET
// This file contains tests for the home page of the Pulse application.
// The tests verify the visibility of various elements on the home page and navigation functionality.

import { test, expect } from '@playwright/test';
import { HomeNotLoggedInPage } from './page-objects/home-NotLoggedIn-page.pom';
import { Page} from '@playwright/test';

test.describe('Home Page not Logged In', () => {
  let homeNotLoggedInPage: HomeNotLoggedInPage;

  test.beforeEach(async ({ page }) => {
    homeNotLoggedInPage = new HomeNotLoggedInPage(page);
    await homeNotLoggedInPage.navigate();
  });

  test('Should display the expected controls on the Blue Top bar, Main Content', async () => {
    await homeNotLoggedInPage.navigate();
    
    // Verify that the page has loaded and the expected elements are visible on the MAIN CONTENT
    await expect(homeNotLoggedInPage.headingText,"headingText").toBeVisible();
    await expect(homeNotLoggedInPage.descriptionText,"descriptionText").toBeVisible();

    await expect(homeNotLoggedInPage.loginToPulseLink,"loginToPulseLink").toBeVisible();
    await expect(homeNotLoggedInPage.createAccountLink,"createAccountLink").toBeVisible();

    // Verify that the page has loaded and the expected elements are visible on the BLUE TOP BAR
    await homeNotLoggedInPage.MMJUALink.waitFor({ state: 'visible' });
    await expect(homeNotLoggedInPage.MMJUALink).toBeVisible();
    await expect(homeNotLoggedInPage.aboutUsLink).toBeVisible();
    await expect(homeNotLoggedInPage.claimsLink).toBeVisible();
    await expect(homeNotLoggedInPage.productsLink).toBeVisible();
    await expect(homeNotLoggedInPage.riskManagementLink).toBeVisible();
    await expect(homeNotLoggedInPage.faqsLink).toBeVisible();
    await expect(homeNotLoggedInPage.contactUsLink).toBeVisible();
    
    await homeNotLoggedInPage.MMJUALink.click();
    await expect(homeNotLoggedInPage['page'],"page").toHaveURL("https://pulse-dev.bbrownretapps.com/");

    await expect(homeNotLoggedInPage.latestNewsHeading,"latestNewsHeading").toBeVisible();
    await expect(homeNotLoggedInPage.underwriterNotificationsHeading,"underwriterNotificationsHeading").toBeVisible();
    
  });

  test('LATEST NEWS from main: Should navigate to the 1st Latest News page when clicked using POM', async () => {
    await homeNotLoggedInPage.latestNews1stArticleLink.click();
    //await expect(newsFirstNotLoggedInPage['page'],"page").toHaveURL("https://pulse-dev.bbrownretapps.com/Marketing/Post/4d530916-6c26-4da1-bc89-08de85159447");
  });

  test('UNDERWRITER NOTIFICATIONS from main: Should navigate to Underwriter 1st Notifications page when clicked using POM', async () => {
    await homeNotLoggedInPage.underwriterNotifications1stArticleLink.click();
    //await expect(newsFirstNotLoggedInPage['page'],"page").toHaveURL("https://pulse-dev.bbrownretapps.com/Marketing/Post/005bb3f9-1290-4c16-bc8a-08de85159447");
  });
  
  test('CREATE NEW ACCOUNT from main: Should navigate to SelectRole when clicked using POM', async () => {
    await homeNotLoggedInPage.createAccountLink.click();
    await expect(homeNotLoggedInPage['page'],"page").toHaveURL("https://pulse-dev.bbrownretapps.com/Registration");
  });
  
  test('LOGIN TO PULSE from main: Should navigate to Login page when clicked using POM', async () => {
    await homeNotLoggedInPage.loginToPulseLink.click();
    await homeNotLoggedInPage['page'].waitForTimeout(2000); // Wait for the login page to load before asserting the URL)
    await expect(homeNotLoggedInPage['page'],"page").toHaveURL("https://pulse-dev.bbrownretapps.com/Account/Login")
  });
  
});