import { test, expect } from '@playwright/test';
import { ProfitCenterAdminPage } from './page-objects/ProfitCentersAdmin.pom';
import { ProfitCenterEditPage } from './page-objects/ProfitCentersEdit.pom';

test.describe('Profit Center Administration', () => {
  let adminPage: ProfitCenterAdminPage;

  test.beforeEach(async ({ page }) => {
    adminPage = new ProfitCenterAdminPage(page);

    await page.goto('/Support/AdminIOLPCLPerProfitCenter');
    await adminPage.waitForPageToLoad();
  });

  test('should display profit center administration page', async () => {
    await expect(adminPage.profitCenterTable).toBeVisible();
    await expect(adminPage.searchInput).toBeVisible();
  });

  test('should search for a profit center', async () => {
    const searchValue = 'Albuquerque';

    await adminPage.searchProfitCenter(searchValue);

    await adminPage.validateSearchResultsContain(searchValue);
  });

  test('should locate a profit center by PC number', async () => {
    const pcNumber = '063';

    await adminPage.searchProfitCenter(pcNumber);

    await adminPage.validateRowExists(pcNumber);
  });

  test('should navigate to edit profit center', async ({ page }) => {
    const pcNumber = '063';

    await adminPage.searchProfitCenter(pcNumber);
    await adminPage.clickEditByPcNumber(pcNumber);

    const editPage = new ProfitCenterEditPage(page);

    await expect(editPage.saveButton).toBeVisible();
  });

  test('should update emails for a profit center', async ({ page }) => {
    const pcNumber = '063';

    await adminPage.searchProfitCenter(pcNumber);
    await adminPage.clickEditByPcNumber(pcNumber);

    const editPage = new ProfitCenterEditPage(page);

    await editPage.enterPclEmail('test.pcl@bbrown.com');
    await editPage.enterIolEmail('test.iol@bbrown.com');

    await editPage.save();

    await expect(page.getByText(/success|saved/i)).toBeVisible();
  });

  test('should validate required fields before save', async ({ page }) => {
    const pcNumber = '063';

    await adminPage.searchProfitCenter(pcNumber);
    await adminPage.clickEditByPcNumber(pcNumber);

    const editPage = new ProfitCenterEditPage(page);

    await editPage.enterPclEmail('');
    await editPage.enterIolEmail('');

    await editPage.saveButton.click();

    await editPage.validateRequiredError('PCL');
    await editPage.validateRequiredError('IOL');
  });

  test('should navigate to next page of results', async () => {
    await adminPage.navigateToNextPage();

    await expect(adminPage.profitCenterTable).toBeVisible();
  });

  test('should navigate to previous page of results', async () => {
    await adminPage.navigateToNextPage();
    await adminPage.navigateToPreviousPage();

    await expect(adminPage.profitCenterTable).toBeVisible();
  });

  test('should clear search results', async () => {
    await adminPage.searchProfitCenter('Albuquerque');
    await adminPage.clearSearch();

    await expect(adminPage.searchInput).toHaveValue('');
  });

  test('should sign out successfully', async ({ page }) => {
    await adminPage.signOut();

    await expect(page).toHaveURL(/login|signin/i);
  });
});