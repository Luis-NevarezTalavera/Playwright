// PULSE /Insureds page, User logged in as Admin, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the /Insureds Page
import { Locator, Page} from '@playwright/test';

export class insureds {
  readonly page: Page;

  // Elements on the Main Content: Insureds Page
  readonly insuredHeading: Locator;
  readonly newInsuredButton: Locator;
  readonly editInsuredButton: Locator;
  readonly insuredSearchBox: Locator;

  readonly insuredTypeLabel: Locator;
  readonly insuredClassificationLabel: Locator;
  readonly insuredFirstNameLabel: Locator;
  readonly insuredMiddleNameLabel: Locator;
  readonly insuredLastNameLabel: Locator;
  readonly insuredEmailLabel: Locator;
  readonly insuredPrimaryAddressLabel: Locator;
  readonly insuredBillingAddressLabel: Locator;
  readonly insuredAgencyLabel: Locator;
  
  // Constructor to initialize the page and elements
  constructor(page: Page) {
    this.page = page;
    
  // Elements on the Main Content: Insureds Page
  this.insuredHeading = page.getByText('Insured', { exact: true });
  this.newInsuredButton = page.getByRole('button').filter({ hasText: /^$/ }).nth(2);
  this.editInsuredButton = page.getByRole('button').filter({ hasText: /^$/ }).nth(3);
  
  this.insuredSearchBox = page.getByRole('textbox', { name: 'Insureds' });

  this.insuredTypeLabel = page.getByText('IndividualInsured Type');
  this.insuredClassificationLabel = page.getByText('StandardInsured Classification');
  this.insuredFirstNameLabel = page.getByText('First Name');
  this.insuredMiddleNameLabel = page.getByText('Middle Name');
  this.insuredLastNameLabel = page.getByText('Last Name');
  this.insuredEmailLabel = page.getByText('Email');
  this.insuredPrimaryAddressLabel = page.getByText('Primary Address');
  this.insuredBillingAddressLabel = page.getByText('Billing Address');
  this.insuredAgencyLabel = page.getByText('Agency');
}

  async navigate() {
    await this.page.goto('https://pulse-dev.bbrownretapps.com/Dashboard/');
  }

}