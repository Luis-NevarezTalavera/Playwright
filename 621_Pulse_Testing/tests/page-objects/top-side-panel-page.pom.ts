// PULSE /Underwriter/Dashboard page, User logged in as Admin, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the /Underwriter/Dashboard Page
import { Locator, Page} from '@playwright/test';

export class TopSidePanelPage {
  readonly page: Page;

  // Elements on the blue top bar
  readonly sideMenu: Locator;
  readonly MMJUALink: Locator;
  readonly aboutUsLink: Locator;
  readonly claimsLink: Locator;
  readonly productsLink: Locator;
  readonly riskManagementLink: Locator;
  readonly faqsLink: Locator;
  readonly contactUsLink: Locator;
  readonly userLink: Locator;
  readonly logOutTopButton: Locator;
  
  // Elements on the Side Panel Menu

  // User Panel Menu
  readonly userToggleButton: Locator;
  readonly userProfileLink: Locator;
  readonly userEmailLink: Locator;
  readonly userPasswordLink: Locator;
  readonly userMFALink: Locator;
  readonly userPersonalDataLink: Locator;
  
  // Underwriter Dashboard Side Panel Menu
  // These are the links that are visible when the user is logged in as an Underwriter or Admin
  readonly dashboardLink: Locator;
  readonly insuredsLink: Locator;
  readonly agenciesLink: Locator;
  readonly userListsLink: Locator;
  readonly policiesListsLink: Locator;
  readonly newsandupdatesListLink: Locator;

  // Admin Side Panel Menu
  // These are the links that are visible when the user is logged in as an Underwriter or Admin
  readonly toggleAdminButton: Locator;
  readonly adminUserListLink: Locator;
  readonly HangfireLink: Locator;
  readonly appTemplatesLink: Locator;
  readonly registrationTestLink: Locator;

  // Buttons available at the top of the Users List page For Admins and Underwriters
  readonly addNewUserButton: Locator;
  readonly usersByRolesListButton: Locator;

  // Constructor to initialize the page and elements
  constructor(page: Page) {
    this.page = page;
    
  // Elements on the blue top bar
    this.sideMenu = page.getByRole('button').filter({ hasText: /^$/ });
    this.MMJUALink = page.getByRole('img', { name: 'Rhode Island JUA' });
    this.aboutUsLink = page.getByRole('link', { name: 'About Us' });
    this.claimsLink = page.getByRole('link', { name: 'Claims' });
    this.productsLink = page.getByRole('link', { name: 'Products' });
    this.riskManagementLink = page.getByRole('link', { name: 'Risk Management' });
    this.faqsLink = page.getByRole('link', { name: 'FAQs' });
    this.contactUsLink = page.getByRole('link', { name: 'Contact Us' });
    this.userLink = page.getByRole('link', { name: '.com' });
    this.logOutTopButton = page.getByRole('button', { name: 'LOGOUT', exact: true })
  
  // Elements on the Side Panel Menu

  // User Panel Menu
    this.userToggleButton = page.getByRole('button', { name: 'Toggle luis.nevarez.1966@gmail.com' });
    this.userProfileLink = page.getByRole('link', { name: 'Profile' });
    this.userEmailLink = page.getByRole('link', { name: 'Email' });
    this.userPasswordLink = page.getByRole('link', { name: 'Password' });
    this.userMFALink = page.getByRole('link', { name: 'MFA' });
    this.userPersonalDataLink = page.getByRole('link', { name: 'Personal Data' });
    
  // Underwriter Dashboard Side Panel Menu
  // These are the links that are visible when the user is logged in as an Underwriter or Admin
    this.dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    this.insuredsLink = page.getByRole('link', { name: 'Insureds' });
    this.agenciesLink = page.getByRole('link', { name: 'Agencies' });
    this.userListsLink = page.getByRole('link', { name: 'Users' });
    this,this.policiesListsLink = page.getByRole('link', { name: 'Policies' });
    this.newsandupdatesListLink = page.getByRole('link', { name: 'News and Updates' });
    
  // Admin Side Panel Menu
  // These are the links that are visible when the user is logged in as an Underwriter or Admin
    this.toggleAdminButton = page.getByRole('button', { name: 'Toggle Admin' });
    this.adminUserListLink = page.getByRole('link', { name: 'New Admin' });
    this.HangfireLink = page.getByRole('link', { name: 'Hangfire' });
    this.appTemplatesLink = page.getByRole('link', { name: 'App Templates' });
    this.registrationTestLink = page.getByRole('link', { name: 'Registration Test' });

    // Buttons available at the top of the Users List page For Admins and Underwriters
    this.addNewUserButton = page.getByRole('button', { name: 'Add New Internal User' })
    this.usersByRolesListButton = page.getByRole('button', { name: 'Roles' });
  }

}