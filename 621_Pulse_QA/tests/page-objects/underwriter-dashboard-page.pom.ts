// PULSE /Underwriter/Dashboard page, User logged in as Admin, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the /Underwriter/Dashboard Page
import {Locator, Page} from '@playwright/test';

export class UnderWriterDashboardPage {
  readonly page: Page;

  // Elements on the Main Content: Underwriter Dashboard
  readonly dashboardHeading: Locator;

  // Grouping buttons on Underwriter Dashboard
  readonly appsGLElectedButton: Locator;
  readonly appsExpiring60daysButton: Locator;
  readonly appsExpired30daysButton: Locator;
  readonly appsPartTimeElectedButton: Locator;
  readonly appsClaimsMadeButton: Locator;
  readonly appsOccurrenceButton: Locator;
  readonly appsHealthProfessionalButton: Locator;
  readonly appsPhysicianSurgeonButton: Locator;
  readonly appsFacilityButton: Locator;

  readonly appsAwaitingReviewButton: Locator;
  readonly appsValidatedButton: Locator;
  readonly appsRatedButton: Locator;
  readonly quotesIssuedButton: Locator; 
  readonly quotesAcceptedButton: Locator;
  readonly appsCoverageDeniedButton: Locator;
  readonly appsBoundButton: Locator;
  readonly appsPolicyIssuedButton: Locator;
  readonly appsQuoteDeclineRequoteButton: Locator;
  
  // Constructor to initialize the page and elements
  constructor(page: Page) {
    this.page = page;
    
  // Elements on the Main Content: Underwriter Dashboard
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' })

    this.appsGLElectedButton = page.getByText('GL Elected');
    this.appsExpiring60daysButton = page.getByText('Expiring next 60 days');
    this.appsExpired30daysButton = page.getByText('Expired last 30 days');
    this.appsPartTimeElectedButton = page.getByText('PartTime Elected');
    this.appsClaimsMadeButton = page.getByText('Claims Made');
    this.appsOccurrenceButton = page.locator('xpath=//html/body/div[3]/div/div[2]/div/div/div[1]/div[2]/div[6]/div/p');
    this.appsHealthProfessionalButton = page.getByText('HealthCare Professional');
    this.appsPhysicianSurgeonButton = page.getByText('Physician Surgeon');
    this.appsFacilityButton = page.locator('xpath=//html/body/div[3]/div/div[2]/div/div/div[1]/div[2]/div[9]/div/p');

    this.appsAwaitingReviewButton = page.getByText('Apps Awaiting Review');
    this.appsValidatedButton = page.getByText('Validated');
    this.appsRatedButton = page.getByText('Rated');
    this.quotesIssuedButton = page.getByText('Quotes Issued');
    this.quotesAcceptedButton = page.getByText('Quotes Accepted');
    this.appsCoverageDeniedButton = page.getByText('Coverage Denied');
    this.appsBoundButton = page.locator('xpath=//html/body/div[3]/div/div[2]/div/div/div[1]/div[2]/div[16]/div/p');
    this.appsPolicyIssuedButton = page.getByText('Policy Issued');
    this.appsQuoteDeclineRequoteButton = page.getByText('Quote Decline/Requote');
  }

  async navigate() {
    await this.page.goto('https://pulse-dev.bbrownretapps.com/Dashboard/');
  }

}