// PULSE Home page, User NOT logged in, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Home Page

import { Locator, Page} from '@playwright/test';

export class HomeNotLoggedInPage {
    // Define locators for the elements on the Top blue bar
    readonly page: Page;
    readonly MMJUALink: Locator;
    readonly aboutUsLink: Locator;
    readonly claimsLink: Locator;
    readonly productsLink: Locator;
    readonly riskManagementLink: Locator;
    readonly faqsLink: Locator;
    readonly contactUsLink: Locator;
    readonly logOutButton: Locator;
    
    // Define locators for the elements on the Main content
    readonly headingText: Locator;
    readonly descriptionText: Locator;
    readonly loginToPulseLink: Locator;
    readonly createAccountLink: Locator;
    readonly latestNewsHeading: Locator;
    readonly latestNews1stArticleLink: Locator;
    readonly underwriterNotificationsHeading: Locator;
    readonly underwriterNotifications1stArticleLink: Locator;
    
    constructor(page: Page) {
        this.page = page;

        this.MMJUALink = page.getByRole('img', { name: 'Rhode Island JUA' });
        this.aboutUsLink = page.getByRole('link', { name: 'About Us' });
        this.claimsLink = page.getByRole('link', { name: 'Claims' });
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.riskManagementLink = page.getByRole('link', { name: 'Risk Management' });
        this.faqsLink = page.getByRole('link', { name: 'FAQs' });
        this.contactUsLink = page.getByRole('link', { name: 'Contact Us' });
        this.logOutButton = page.getByRole('button', { name: 'Log Out' });

        this.headingText = page.getByRole('heading', { name: 'Discover Our Latest Site Updates' });
        this.descriptionText = page.getByText('We\'ve updated our site to')

        this.loginToPulseLink = page.getByRole('link', { name: 'Login to Pulse' });
        this.createAccountLink = page.getByRole('link', { name: 'Create new Account' });

        this.latestNewsHeading = page.getByRole('heading', { name: 'Latest News' });
        this.latestNews1stArticleLink = page.locator('.mud-card-content').first();

        this.underwriterNotificationsHeading = page.getByRole('heading', { name: 'Underwriter Notifications' });
        this.underwriterNotifications1stArticleLink = page.locator('div:nth-child(2) > .mud-paper.mud-elevation-2 > .d-flex.flex-column.gap-3 > .d-flex.flex-column.gap-2 > div > .mud-card-content').first();
    }

    async navigate() {
        await this.page.goto('https://pulse-dev.bbrownretapps.com/');
    }
}