import { test, expect } from '@playwright/test';
import { InactiveUsersPage } from './page-objects/AdminInactiveUsers.pom';

test.describe('Inactive Users Page', () => {
  let inactiveUsersPage: InactiveUsersPage;

  test.beforeEach(async ({ page }) => {
    inactiveUsersPage = new InactiveUsersPage(page);

    await inactiveUsersPage.goto();
    await inactiveUsersPage.verifyPageLoaded();
  });

  test('should display inactive users', async () => {
    await inactiveUsersPage.validateTableHasData();
  });

  test('should search for user', async () => {
    await inactiveUsersPage.searchUser('Denise Regon');

    await inactiveUsersPage.validateUserVisible(
      'Denise Regon'
    );
  });

  test('should return no results for invalid user', async () => {
    await inactiveUsersPage.searchUser(
      'NonExistentUser12345'
    );

    await inactiveUsersPage.validateNoResults();
  });

  test('should navigate to next page when available', async () => {
    await inactiveUsersPage.goToNextPage();

    await expect(
      inactiveUsersPage.usersTable
    ).toBeVisible();
  });

  test('should validate required field pattern', async () => {
    await inactiveUsersPage.validateRequiredSearchField();
  });
});