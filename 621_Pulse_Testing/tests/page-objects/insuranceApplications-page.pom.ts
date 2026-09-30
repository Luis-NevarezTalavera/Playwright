// PULSE /Underwriter/Dashboard page, User logged in as Admin, Page Object Model (POM)
// This file contains the selectors and methods for interacting with the /Underwriter/Dashboard Page
import { Locator, Page} from '@playwright/test';

export class InsuranceApplicationsPage {
    readonly page: Page;

    // Tabs under the /InsuranceApp/{applicationId} page
    readonly applicationSummaryTab: Locator;
    readonly formTab: Locator;
    readonly documentsTab: Locator;
    readonly underwritingTab: Locator;

    // Buttons in the Underwriting tab
    readonly validateAppUWButton: Locator;
    readonly rateAppUWButton: Locator;
    readonly quoteAppUWButton: Locator;
    readonly createPolicyUWButton: Locator;
    readonly issuePolicyUWButton: Locator;
    readonly rollBackAppUWButton: Locator;

    // Tabs under the Underwriting tab
    readonly rateEngineInputTab: Locator;
    readonly rateEngineOutputTab: Locator;

    // Validate Application Dialog box
    readonly validateAppTitle: Locator;
    readonly licenseValidationLink: Locator;
    readonly validLicenseYesCheckbox: Locator;
    readonly validLicenseNoCheckbox: Locator;
    readonly validateAppCancelButton: Locator;
    readonly validateAppButton: Locator;

    // Rate Application Dialog box
    readonly rateAppTitle: Locator;
    readonly underwriterDebitPercentTextbox: Locator;
    readonly underwriterDebitReasonTextbox: Locator;
    readonly underwriterCreditPercentTextbox: Locator;
    readonly underwriterCreditReasonTextbox: Locator;
    readonly professionalStaffDebitPercentTextbox: Locator;
    readonly professionalStaffDebitReasonTextbox: Locator;
    readonly mediIQSiteLink: Locator;
    readonly mediIQDiscountApplyYesCheckbox: Locator;
    readonly mediIQDiscountApplyNoCheckbox: Locator;
    readonly rateAppButton: Locator;
    readonly rateAppCancelButton: Locator;
    
    // Create Quote Doc Dialog box
    readonly createQuoteTitle: Locator;
    readonly fullPaymentYesCheckbox: Locator;
    readonly fullPaymentNoCheckbox: Locator;
    readonly addSpecialLanguageYesCheckbox: Locator;
    readonly addSpecialLanguageNoCheckbox: Locator;
    readonly createQuoteCancelButton: Locator;
    readonly createQuoteButton: Locator;
    readonly addManualJUA55YesCheckbox: Locator;
    readonly addManualJUA55NoCheckbox: Locator;
    readonly manualJUA55Textbox: Locator;

    // Create Policy Dialog box
    readonly createPolicyTitle: Locator;
    readonly policyNumberTextbox: Locator;
    readonly createPolicyCancelButton: Locator;
    readonly createPolicyDlgButton: Locator;

    // Issue Policy Dialog box
    // readonly issuePolicyButton: Locator;
    
    // Rollback Application Dialog box
    readonly rollBackAppTitle: Locator;
    readonly inProgressButton: Locator;
    readonly awaitingReviewButton: Locator
    readonly cancelRollBackButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        
        // Tabs on the /InsuranceApp/{applicationId} page
        this.applicationSummaryTab = this.page.getByRole('tab', { name: 'Application Summary' });
        this.formTab = this.page.getByRole('tab', { name: 'Form' });
        this.documentsTab = this.page.getByRole('tab', { name: 'Documents' });
        this.underwritingTab = this.page.getByRole('tab', { name: 'Underwriting' });
        
        // Buttons in the Underwriting tab
        this.validateAppUWButton = this.page.getByRole('tabpanel', { name: 'Underwriting' }).getByRole('button').first()
        this.rateAppUWButton = this.page.getByRole('tabpanel', { name: 'Underwriting' }).getByRole('button').nth(1)
        this.quoteAppUWButton = this.page.getByRole('tabpanel', { name: 'Underwriting' }).getByRole('button').nth(2)
        this.createPolicyUWButton = this.page.getByRole('tabpanel', { name: 'Underwriting' }).getByRole('button').nth(3)
        this.issuePolicyUWButton = this.page.getByRole('tabpanel', { name: 'Underwriting' }).getByRole('button').nth(4)
        this.rollBackAppUWButton = this.page.getByRole('tabpanel', { name: 'Underwriting' }).getByRole('button').nth(5)

        // Tabs under the Underwriting tab
        this.rateEngineInputTab = this.page.getByRole('tab', { name: 'Rating Engine Input' });
        this.rateEngineOutputTab = this.page.getByRole('tab', { name: 'Rating Engine Output' });

        // Validate Application Dialog box
        this.validateAppTitle = this.page.getByText('Validate Application');
        this.licenseValidationLink = this.page.getByRole('link', { name: 'License Validation' });
        this.validLicenseYesCheckbox = this.page.getByRole('checkbox', { name: 'Yes' });
        this.validLicenseNoCheckbox = this.page.getByRole('checkbox', { name: 'No' });
        this.validateAppButton = this.page.getByRole('button', { name: 'Validate App' });
        this.validateAppCancelButton = this.page.getByRole('button', { name: 'Cancel' });

        // Rate Application Dialog box
        this.rateAppTitle = this.page.getByText('Rate App', { exact: true });
        this.underwriterDebitPercentTextbox = this.page.getByRole('textbox', { name: 'Underwriter Debit %' });
        this.underwriterDebitReasonTextbox = this.page.getByRole('textbox', { name: 'Debit Reason' });
        this.underwriterCreditPercentTextbox = this.page.getByRole('textbox', { name: 'Underwriter Credit %' });
        this.underwriterCreditReasonTextbox = this.page.getByRole('textbox', { name: 'Credit Reason' });
        this.professionalStaffDebitPercentTextbox = this.page.getByRole('textbox', { name: 'Professional Staff Debit %' });
        this.professionalStaffDebitReasonTextbox = this.page.getByRole('textbox', { name: 'Professional Staff', exact: true });
        this.mediIQSiteLink = this.page.getByRole('link', { name: 'MedIQ Site' });
        this.mediIQDiscountApplyYesCheckbox = this.page.getByRole('checkbox', { name: 'Yes' });
        this.mediIQDiscountApplyNoCheckbox = this.page.getByRole('checkbox', { name: 'No' });
        this.rateAppButton = this.page.getByRole('button', { name: 'Rate Application' });
        this.rateAppCancelButton = this.page.getByRole('button', { name: 'Cancel' });

        // Create Quote Doc Dialog box
        this.createQuoteTitle = this.page.getByText('Create Quote Doc');
        this.fullPaymentYesCheckbox = this.page.getByRole('checkbox', { name: 'Yes' }).first();
        this.fullPaymentNoCheckbox = this.page.getByRole('checkbox', { name: 'No' }).first();
        this.addSpecialLanguageYesCheckbox = this.page.getByRole('checkbox', { name: 'Yes' }).nth(1);
        this.addSpecialLanguageNoCheckbox = this.page.getByRole('checkbox', { name: 'No' }).nth(1);
        this.createQuoteButton = this.page.getByRole('button', { name: 'Create Quote' });
        this.createQuoteCancelButton = this.page.getByRole('button', { name: 'Cancel' });
        this.addManualJUA55YesCheckbox = this.page.getByRole('checkbox', { name: 'Yes' }).nth(2)
        this.addManualJUA55NoCheckbox = this.page.getByRole('checkbox', { name: 'No' }).nth(2)
        this.manualJUA55Textbox = this.page.getByRole('textbox', { name: 'Enter Manual JUA55 Text for' });

        // Create Policy Dialog box
        this.createPolicyTitle = this.page.getByText('Create Policy Docs');
        this.policyNumberTextbox = this.page.getByRole('textbox', { name: 'Policy Number' });
        this.createPolicyCancelButton = this.page.getByRole('button', { name: 'Cancel' });
        this.createPolicyDlgButton = this.page.getByRole('button', { name: 'Create Policy' });
    
        // Issue Policy Button - No dialog box appears when clicking this button, so no selectors are defined for it
        // this.issuePolicyUWButton = this.page.getByRole('tabpanel', { name: 'Underwriting' }).getByRole('button').nth(4)
        
        // Rollback Application Dialog box
        this.rollBackAppTitle = this.page.getByText('Change App Status');
        this.inProgressButton = this.page.getByRole('button', { name: 'InProgress' });
        this.awaitingReviewButton = this.page.getByRole('button', { name: 'AwaitingReview' });
        this.cancelRollBackButton = this.page.getByRole('button', { name: 'Cancel' });

    }
    
}