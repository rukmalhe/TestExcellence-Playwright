import { Page, BrowserContext, chromium } from '@playwright/test';
import { test, expect } from '@playwright/test';

export interface TestContext {
  page: Page;
  context: BrowserContext;
  login: () => Promise<void>;
}

export async function createTestContext({
  username,
  password,
  crmUrl
}: {
  username: string;
  password: string;
  crmUrl: string;
}): Promise<TestContext> {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const login = async () => {
    await page.goto(crmUrl);
    //await page.fill('input[type="email"]', username);
    await page.getByLabel('Email, phone, or Skype').fill(username);
    await page.getByRole('button', { name: 'Next' }).click();

    await page.waitForSelector('#i0118'); // Wait for the password field to appear
    //await page.getByLabel('Enter password').fill(password);
    await page.locator('input[type="password"]').fill(password);
    await page.getByRole('button', { name: 'Sign in' }).click();

    // If asked to stay signed in
    try {
      await page.getByRole('button', { name: 'Yes' }).click({ timeout: 3000 });
    } catch (e) {
      console.log('No stay signed in prompt');
    }

    // Assert you’ve landed on CRM dashboard
    await expect(page).toHaveURL(/.*dynamics.com.*/);
    console.log("✅ Login successful!");
  };

  return { page, context, login };
}
