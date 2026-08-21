// PULSE /Account/Login page, User NOT logged in, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the /Account/Login Page

import { Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly MMJUALink: Locator;

    readonly headingLogIn: Locator;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;

    readonly rememberMeText: Locator;
    readonly rememberMeCheckbox: Locator;

    readonly loginButton: Locator;

    readonly forgotPasswordLink: Locator;
    readonly resendEmailConfirmationLink: Locator;

    constructor(page: Page) {
        this.page = page;
        
        this.MMJUALink = page.getByRole('img', { name: 'Rhode Island JUA' });

        this.headingLogIn = page.getByRole('heading', { name: 'Log in' });
        this.usernameInput = page.getByRole('textbox', { name: 'UserName' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });

        this.rememberMeText = page.getByText('Remember me');
        this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember me' });

        this.loginButton = page.getByRole('button', { name: 'Log in' });

        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
        this.resendEmailConfirmationLink = page.getByRole('link', { name: 'Resend email confirmation' });
    }

    async navigate() {
        await this.page.goto('https://pulse-dev.bbrownretapps.com/Account/Login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}