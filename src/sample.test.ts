import { test, expect } from '@playwright/test';
import { createTestContext, TestContext } from './test_automation_playwright';
import 'dotenv/config';

test.describe('Dynamics 365 CRM Login Test', () => {
  let context: TestContext;

  test.beforeAll(async () => {
    context = await createTestContext({
      username: process.env.D365_USERNAME!,
      password: process.env.D365_PASSWORD!,
      crmUrl: 'https://org29297672.crm6.dynamics.com',
    });
  });

  test('should open Dynamics CRM and validate login', async () => {
    await context.login();
    await expect(context.page).toHaveTitle(/Dynamics 365/i);
  }, { timeout: 60000 });

  test.afterAll(async () => {
    await context.context.close(); // Explicitly closing the browser context
  });
});
