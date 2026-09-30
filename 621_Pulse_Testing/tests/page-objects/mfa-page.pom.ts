// PULSE /Account/LoginWith2fa?rememberMe=False page, User NOT logged in, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the /Account/LoginWith2fa Page

import { Locator, Page} from '@playwright/test';

export class MfaPage {
    readonly page: Page;
    readonly headingMFA: Locator;
    readonly authenticatorCodeInput: Locator;
    readonly rememberMachineCheckbox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.headingMFA = page.getByRole('heading', { name: 'Two-factor authentication' });

        this.authenticatorCodeInput = page.getByRole('textbox', { name: 'Authenticator code' });
        this.rememberMachineCheckbox = page.getByText('Remember this machine');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

  async submitMFA(authCode: string) {
      await this.authenticatorCodeInput.fill(authCode);
      await this.rememberMachineCheckbox.click();
      await this.loginButton.click();
  }

}