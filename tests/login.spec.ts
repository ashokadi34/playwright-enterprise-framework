import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { config } from '../utils/ConfigReader';

console.log(config);
console.log("Base URL:", config.baseUrl);
console.log("Username:", config.username);

test.describe('Login Tests', () => {

  test('Verify valid login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigate(config.baseUrl);
    await loginPage.login(config.username, config.password);

    await loginPage.verifyLoginSuccess();
    await dashboardPage.verifyDashboard();
  });
});