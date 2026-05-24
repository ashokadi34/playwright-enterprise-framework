import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private usernameInput = 'input[name="username"]';
  private passwordInput = 'input[name="password"]';
  private loginButton = 'button[type="submit"]';

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  async verifyLoginSuccess() {

    await this.page.waitForURL('**/dashboard/**', {
      timeout: 20000
    });

    await expect(this.page).toHaveURL(/dashboard/);
  }
}