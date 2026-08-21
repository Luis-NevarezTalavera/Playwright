import { test as base, expect } from '@playwright/test';
import { LoginPage } from './page-objects/login-page.pom';

const test = base.extend<{ testData: { username: string; password: string }; }>({
  testData: async ({}, use) => {
    const data = {username: "luis.nevarez.1966@gmail.com", password: "Password01"};
    await use(data);
  }
});

// Not Fully Parallel, but Single Worker
test.describe.configure({ mode: 'default' });

test('LOGIN PAGE: Should Display the Expected controls and Login with valid credentials using POM', async ({ page, testData }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();

  // Should Display the Expected controls are visible
  await test.step('Display the Expected controls', async () => {
    
    await expect(loginPage.page,"page").toHaveURL('https://pulse-dev.bbrownretapps.com/Account/Login');

    await expect(loginPage.MMJUALink,"MMJUALink").toBeVisible();

    await expect(loginPage.headingLogIn,"headingLogIn").toBeVisible();
    await expect(loginPage.usernameInput,"usernameInput").toBeVisible();
    await expect(loginPage.passwordInput,"passwordInput").toBeVisible();

    await expect(loginPage.rememberMeText,"rememberMeText").toBeVisible();
    await expect(loginPage.rememberMeCheckbox,"rememberMeCheckbox").toBeVisible();
    await expect(loginPage.loginButton,"loginButton").toBeVisible();

    await expect(loginPage.forgotPasswordLink,"forgotPasswordLink").toBeVisible();
    await expect(loginPage.resendEmailConfirmationLink,"resendEmailConfirmationLink").toBeVisible();
  });

  // Recover your password?
  await test.step('LOGIN PAGE: Should navigate to Recover your password?', async () => {
    await loginPage.forgotPasswordLink.click();
    await expect(page,"page").toHaveURL('https://pulse-dev.bbrownretapps.com/Account/ForgotPassword');
    await page.goBack(); // Navigate back to the login page
  });
  
  // Resend email confirmation
  await test.step('LOGIN PAGE: Should navigate to Resend email confirmation', async () => {
    await loginPage.resendEmailConfirmationLink.click();
    await expect(page,"page").toHaveURL('https://pulse-dev.bbrownretapps.com/Account/ResendEmailConfirmation');
    await page.goBack(); // Navigate back to the login page
  });

  // Login with valid credentials
  await test.step('LOGIN PAGE: Login with valid credentials, lands in MFA page', async () => {
    await loginPage.login(testData.username, testData.password);
    await loginPage['page'].waitForTimeout(2000); // Wait for the login page to load before asserting the URL)
    await expect(loginPage.page,"page").toHaveURL('https://pulse-dev.bbrownretapps.com/Account/Login');
  });
});