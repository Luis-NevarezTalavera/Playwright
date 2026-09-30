// Global Risk Survey, Incident Report Page, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the Incident Report Page

import { Locator, Page } from "@playwright/test";

export class GRSIncidentReportPage {
  // Define locators for the elements on the Incident Report Page
  readonly page: Page;

  readonly GlobalRiskSurveyAndIncidentReportingHeading: Locator;

  readonly PotentialincidentsShouldBeReported: Locator;
  readonly WhatIsTheMonthlyRiskSurveyParagraph: Locator;
  readonly HowDoIIdentifyAnIncident: Locator;
  readonly Errors: Locator;
  readonly Omissions: Locator;
  readonly Demands: Locator;
  readonly OutOfTheOrdinaryInquiries: Locator;
  readonly ItIsImportantToNoteThat: Locator;

  readonly StartButton: Locator;

  readonly IncidentsParagraph: Locator;
  readonly IncidentsNoRadio: Locator;
  readonly IncidentsYesRadio: Locator;

  // If IncidentsYesRadioButton is True, then the following fields are displayed
  readonly AlreadyReportedParagraph: Locator;
  readonly AlreadyReportedNoRadio: Locator;
  readonly AlreadyReportedYesRadio: Locator;

  readonly ClientName: Locator;
  readonly ClientNameTextbox: Locator;

  readonly IncidentsNextbutton: Locator;

  readonly EOClaimCircunstanceNotification: Locator;
  readonly GroupCompanyTextBox: Locator;
  readonly LossNameTextBox: Locator;
  readonly ProfitCentreTextBox: Locator;
  readonly EmailTextBox: Locator;
  readonly aClaimRadio: Locator;
  readonly aCircumstanceRadio: Locator;
  readonly DateOfFirstAwarenessDate: Locator;
  readonly DateOfLoss: Locator;
  readonly BriefDescriptionOfTheSituation: Locator;
  readonly UnderlyingInsurer: Locator;

  readonly CategoryOfEOHeading: Locator;
    readonly GapInCoverRadio: Locator;
    readonly NonDisclosureOfPreviousClaimsRadio: Locator;
    readonly UnderinsuranceUnsuitablePolicyRadio: Locator;
    readonly RenewalMissedRadio: Locator;
    readonly FairRepresentationRadio: Locator;
    readonly OnerousTermsRadio: Locator;
    readonly NonDisclosureOfLiquidationsSanctionsRadio: Locator;
    readonly ExceedingUnderwritingAuthorityRadio: Locator;
    readonly LateReferralRadio: Locator;
  
  readonly ActualOrPotentialQuantumTextBox: Locator;
  readonly ViewOnLikelyExposureHeading: Locator;
    readonly HighlyLikelyRadio: Locator;
    readonly ProbableRadio: Locator;
    readonly UnlikelyRadio: Locator;
    readonly HighlyUnlikelyRadio: Locator;
    



  constructor(page: Page) {
    this.page = page;

    this.GlobalRiskSurveyAndIncidentReportingHeading = page.getByRole("heading", { name: "GLOBAL RISK SURVEY AND INCIDENT REPORTING" });

    this.WhatIsTheMonthlyRiskSurveyParagraph = page.getByText("What is the Monthly Risk Survey?");
    this.PotentialincidentsShouldBeReported = page.getByText("Potential incidents (as defined below) should be reported to the Brown & Brown (Europe) Legal Department");
    this.HowDoIIdentifyAnIncident = page.getByText("How do I identify an incident?");
    this.Errors = page.getByText("Errors: an error could be an actual or alleged mistake");
    this.Omissions = page.getByText("Omissions: an omission is an actual or alleged failure");
    this.Demands = page.getByText("Demands: obviously, a letter before action from a lawyer");
    this.OutOfTheOrdinaryInquiries = page.getByText("Out of the Ordinary Enquiries: Any enquiries from the FCA or the Financial Ombudsman Service (FOS)");
    this.ItIsImportantToNoteThat = page.getByText("It is important to note that a reportable incident");

    this.StartButton = page.getByRole("button", { name: "Start" });

    this.IncidentsParagraph = page.getByText("Incidents");
    this.IncidentsNoRadio = page.getByRole("radio", { name: "No" });
    this.IncidentsYesRadio = page.getByRole("radio", { name: "Yes" });
  
    // If IncidentsYesRadioButton is True, then the following fields are displayed
    this.AlreadyReportedParagraph = page.getByText("Already Reported");
    this.AlreadyReportedNoRadio = page.getByRole("radio", { name: "No" });
    this.AlreadyReportedYesRadio = page.getByRole("radio", { name: "Yes" });

    this.ClientName = page.getByText("Client Name");
    this.ClientNameTextbox = page.getByRole("textbox", { name: "If you replied 'Yes' to question 1 and 'No' to question 2 please provide client name(s)." });

    this.IncidentsNextbutton = page.getByRole("button", { name: "Next" });

    this.EOClaimCircunstanceNotification = page.getByText("E&O CLAIM/CIRCUMSTANCE NOTIFICATION");
    this.GroupCompanyTextBox = page.getByRole("textbox", { name: "Group Company:" });
    this.LossNameTextBox = page.getByRole("textbox", { name: "Loss Name:" });
    this.ProfitCentreTextBox = page.getByRole("textbox", { name: "Profit Centre:" });
    this.EmailTextBox = page.getByRole("textbox", { name: "Email:" });
    this.aClaimRadio = page.getByRole("radio", { name: "a Claim (i.e. actual)" });
    this.aCircumstanceRadio = page.getByRole("radio", { name: "a Circumstance (i.e. suspected, precautionary)" });
    this.DateOfFirstAwarenessDate = page.getByRole("textbox", { name: "Date of first awareness:" });
    this.DateOfLoss = page.getByRole("textbox", { name: "Date of Loss:" });
    this.BriefDescriptionOfTheSituation = page.getByRole("textbox", { name: "Brief description of the situation:" });
    this.UnderlyingInsurer = page.getByRole("textbox", { name: "Underlying Insurer:" });

    this.CategoryOfEOHeading = page.getByRole("heading", { name: "Category of E&O" });
      this.GapInCoverRadio = page.getByRole("radio", { name: "Gap in Cover" });
      this.NonDisclosureOfPreviousClaimsRadio = page.getByRole("radio", { name: "Non-disclosure of previous claims" });
      this.UnderinsuranceUnsuitablePolicyRadio = page.getByRole("radio", { name: "Underinsurance Unsuitable Policy" });
      this.RenewalMissedRadio = page.getByRole("radio", { name: "Renewal Missed" });
      this.FairRepresentationRadio = page.getByRole("radio", { name: "Fair Representation" });
      this.OnerousTermsRadio = page.getByRole("radio", { name: "Onerous Terms" });
      this.NonDisclosureOfLiquidationsSanctionsRadio = page.getByRole("radio", { name: "Non-disclosure of liquidations/sanctions" });
      this.ExceedingUnderwritingAuthorityRadio = page.getByRole("radio", { name: "Exceeding Underwriting Authority" });
      this.LateReferralRadio = page.getByRole("radio", { name: "Late Referral" });

    this.ActualOrPotentialQuantumTextBox = page.getByRole("textbox", { name: "Actual or Potential Quantum:" });
    this.ViewOnLikelyExposureHeading = page.getByRole("heading", { name: "View on Likely Exposure" });
      this.HighlyLikelyRadio = page.getByRole("radio", { name: "Highly Likely" });
      this.ProbableRadio = page.getByRole("radio", { name: "Probable" });
      this.UnlikelyRadio = page.getByRole("radio", { name: "Unlikely" });
      this.HighlyUnlikelyRadio = page.getByRole("radio", { name: "Highly Unlikely" });




  }
}