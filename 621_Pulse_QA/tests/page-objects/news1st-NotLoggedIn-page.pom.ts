// PULSE News - 1st page, User NOT logged in, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Home Page

import { Locator, Page} from '@playwright/test';

export class NewsFirstNotLoggedInPage {
    // Define locators for the elements on the Top blue bar
    readonly page: Page;
    readonly MMJUALink: Locator;
    readonly aboutUsLink: Locator;
    readonly claimsLink: Locator;
    readonly productsLink: Locator;
    readonly riskManagementLink: Locator;
    readonly faqsLink: Locator;
    readonly contactUsLink: Locator;
    
    // Define locators for the elements on the Main content
    readonly qaNewsHeading: Locator;
    readonly documentHeading: Locator;
    readonly showThumbnailsButton: Locator;
    readonly previousPageButton: Locator;
    readonly nextPageButton: Locator;
    readonly spinButton: Locator;
    readonly zoomOutButton: Locator;
    readonly zoomInButton: Locator;
    readonly menuActivatorButton: Locator;
    readonly thumbnailFirstPage: Locator;
    readonly pdfDocumentFirstPage: Locator;
    readonly backToHomeButton: Locator;
    
    
    constructor(page: Page) {
        this.page = page;

        this.MMJUALink = page.getByRole('img', { name: 'Rhode Island JUA' });
        this.aboutUsLink = page.getByRole('link', { name: 'About Us' });
        this.claimsLink = page.getByRole('link', { name: 'Claims' });
        this.productsLink = page.getByRole('link', { name: 'Products' });
        this.riskManagementLink = page.getByRole('link', { name: 'Risk Management' });
        this.faqsLink = page.getByRole('link', { name: 'FAQs' });
        this.contactUsLink = page.getByRole('link', { name: 'Contact Us' });

        this.qaNewsHeading = page.getByRole('heading', { name: 'QA\'s News test' });
        this.documentHeading = page.getByRole('heading', { name: 'Document' });
        this.showThumbnailsButton = page.getByRole('button', { name: 'Show Thumbnails' });
        this.previousPageButton = page.getByRole('button', { name: 'Previous Page' });
        this.nextPageButton = page.getByRole('button', { name: 'Next Page' });
        this.spinButton = page.getByRole('spinbutton');
        this.zoomOutButton = page.getByRole('button', { name: 'Zoom Out' });
        this.zoomInButton = page.getByRole('button', { name: 'Zoom In' });
        this.menuActivatorButton = page.locator('.mud-button-root.mud-icon-button.mud-primary-text.hover\\:mud-primary-hover.mud-ripple.mud-ripple-icon.mud-menu-icon-button-activator');
        this.thumbnailFirstPage = page.locator('.blazorpdf-pdf__thumbnails-thumbnail').first();
        this.pdfDocumentFirstPage = page.locator('.blazorpdf-pdf > div:nth-child(3)');
        this.backToHomeButton = page.getByRole('button', { name: 'Back to Home' });
    }

    async navigate() {
        await this.page.goto('https://pulse-dev.bbrownretapps.com/Marketing/Post/4d530916-6c26-4da1-bc89-08de85159447');
    }
}