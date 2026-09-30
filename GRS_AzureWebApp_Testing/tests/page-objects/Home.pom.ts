// Global Risk Survey, Home page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Global Risk Survey Page

import { Locator, Page } from "@playwright/test";

export class HomePage {
  // Define locators for the elements on the Top blue bar
  readonly page: Page;
  readonly GlobalRiskHeading: Locator;

  readonly EnterpriseSurveyLink: Locator;
  readonly IncidentReportLink: Locator;
  readonly LeadershipReportsLink: Locator;
  readonly UserEmailTopLink: Locator;
  readonly SignInTopLink: Locator;
  readonly SignOutTopLink: Locator;
  readonly AdminDropdownMenu: Locator;
    readonly ProfitCentersMenuItem: Locator;
    readonly LeadershipReportsMenuItem: Locator;
    readonly PCExeptionsMenuItem: Locator;
    readonly PCSilosMenuItem: Locator;
    // -------------------------------
    readonly UsersMenuItem: Locator;
    readonly AddUserMenuItem: Locator;
    readonly InactiveUsersMenuItem: Locator;
    readonly UsersDetailsMenuItem: Locator;
    // -------------------------------
    readonly ManageJobsMenuItem: Locator;
    readonly HangfireDashboardMenuItem: Locator;
  
  readonly BrownAndBrownLink: Locator;
  

  // Login Dialog window locators
  readonly EmailTextbox: Locator;
  readonly NextButton: Locator;
  readonly PasswordTextbox: Locator;
  readonly SignInButton: Locator;

  readonly SwitchEdgeProfileButton: Locator;
  /* Locators when the user is not authenticated and needs to sign in to sync data
  readonly SignInToSyncDataButton: Locator;
  readonly SignInMSEdgeLink: Locator;
  */

  constructor(page: Page) {
    this.page = page;

    this.GlobalRiskHeading = page.getByRole("heading", { name: "Brown & Brown Global Risk Survey"});

    this.EnterpriseSurveyLink = page.getByRole("link", { name: "Enterprise Survey Global Risk" });
    this.IncidentReportLink = page.getByRole("link", { name: "Incident Report" });
    this.LeadershipReportsLink = page.getByRole("link", { name: "Leadership Reports" });
    this.UserEmailTopLink = page.getByRole("link", { name: "luis.talavera@bbrown.com" });
    
    this.SignInTopLink = page.getByRole("link", { name: "Sign in" });
    this.SignOutTopLink = page.getByRole("link", { name: "Sign out" });

    this.AdminDropdownMenu = page.getByRole("button", { name: "Admin" });
      this.ProfitCentersMenuItem = page.getByRole("link", { name: "Profit Centers" });
      this.LeadershipReportsMenuItem = page.getByRole("link", { name: "Leadership Reports" });
      this.PCExeptionsMenuItem = page.getByRole("link", { name: "PC Exceptions" });
      this.PCSilosMenuItem = page.getByRole("link", { name: "PC Silos" });
      // -------------------------------
      this.UsersMenuItem = page.getByRole("link", { name: "Users" });
      this.AddUserMenuItem = page.getByRole("link", { name: "Add User" });
      this.InactiveUsersMenuItem = page.getByRole("link", { name: "Inactive Users" });
      this.UsersDetailsMenuItem = page.getByRole("link", { name: "Users Details" });
      // -------------------------------
      this.ManageJobsMenuItem = page.getByRole("link", { name: "Manage Jobs" });
      this.HangfireDashboardMenuItem = page.getByRole("link", { name: "Hangfire Dashboard" });

    this.BrownAndBrownLink = page.getByRole("link", { name: "Copyright © 2026 Brown & Brown, Inc. All rights reserved." });

    // Login Dialog window
    this.EmailTextbox = page.getByRole("textbox", { name: "Enter your email, phone, or" });
    this.NextButton = page.getByRole("button", { name: "Next" });
    this.PasswordTextbox = page.getByRole("textbox", { name: "Enter the password for luis." });
    this.SignInButton = page.getByRole("button", { name: "Sign in" });

    this.SwitchEdgeProfileButton = page.getByRole("button", { name: "Switch Edge profile" });

    /* Locators when the user is not authenticated and needs to sign in to sync data
    this.SignInMSEdgeLink = page.getByRole("link", { name: "Sign in" });
    this.SignInToSyncDataButton = page.getByRole("button", { name: "Sign in to sync data" });
    */
  }

  async navigate() {
    await this.page.goto("https://grs-dev.bbrownretapps.com/");
  }
}
