/**
 * Test for Login with MFA using Playwright and Page Object Model (POM)
 * This test verifies the login functionality with Multi-Factor Authentication (MFA)
 * It uses the LoginPage and MfaPage POMs to interact with the application
 */

import { test as base, expect } from '@playwright/test';
import { LoginPage } from './page-objects/login-page.pom';
import { MfaPage } from './page-objects/mfa-page.pom';
import path from 'path';

const test = base.extend<{ testData: { email: string; password: string, mfaCode: string }; }>({
  testData: async ({}, use) => {
    // mfaCode needs to be updated from the MS Authenticator app Before running the test, run it once the code has been updated to maximize time when it is valid
    // let userEmail: string = "luis.nevarez.1966@gmail.com"; // User with Underwriter Access
    // let userEmail: string = "luis.talavera@bbrown.com"; // User with Admin Access
    let userEmail: string = process.env.USER_TYPE === 'admin' ? "luis.talavera@bbrown.com" : "luis.nevarez.1966@gmail.com";
    const data = {email: userEmail, password: "Password01!", mfaCode: process.env.MFA_CODE ? process.env.MFA_CODE : "000000"};
    await use(data);
  }
});

// Not Fully Parallel, but Single Worker
test.describe.configure({ mode: 'default' });

test('Should Login with valid credentials and enter MFA code using POM', async ({ page, testData }) => {
  const loginPage = new LoginPage(page);
  const mfaPage = new MfaPage(page);

  // Navigate to the login page and land in the MFA page
  await test.step('LOGIN PAGE: Navigate to login page, Enter Login Credentials and land in the MFA page', async () => {
    await loginPage.navigate();
    await loginPage.login(testData.email, testData.password);
    await expect(loginPage.page,"page").toHaveURL('https://pulse-dev.bbrownretapps.com/Account/LoginWith2fa?rememberMe=False');
  });

  // Should Display the Expected controls are visible
  await test.step('MFA PAGE: Display the Expected controls', async () => {
    await expect(mfaPage.authenticatorCodeInput,"authenticatorCodeInput").toBeVisible();
    await expect(mfaPage.rememberMachineCheckbox,"rememberMachineCheckbox").toBeVisible();
    await expect(mfaPage.loginButton,"loginButton").toBeVisible();
  });

  // Submit MFA code and verify successful login to default page per type of User
  await test.step('MFA PAGE: Submit MFA code and verify successful login to default page per type of User', async () => {
    await mfaPage.submitMFA(testData.mfaCode);
    await mfaPage['page'].waitForTimeout(2000); // Wait for the login page to load before asserting the URL)
    await expect(page,"page").toHaveURL('https://pulse-dev.bbrownretapps.com/Dashboard/');

    // Define the path for the authentication file
    // This file will store the authenticated state after login
    const authFile = path.join(__dirname, `../.auth/userAuth.json`);

    // Save authenticated state
    await page.context().storageState({ path: authFile });

  });
});