// @ts-check
import { test, expect } from '@playwright/test';

const { chromium } = require('playwright');
const { faker } = require('@faker-js/faker');

(async () => {
  const browser = await chromium.launch({ headless: false }); // see the browser
  const page = await browser.newPage();

  // Go to the registration page
  await page.goto('https://labsqajobs.qaharbor.com/candidate-registration');

  // Generate fake data
  const username = faker.internet.userName().toLowerCase();
  const email = faker.internet.email().toLowerCase();
  const password = faker.internet.password();

  console.log("Generated Data:");
  console.log({ username, email, password });

  // Fill form fields
  await page.fill('input[name="username"]', username);
    await page.waitForTimeout(5000);
  await page.fill('input[name="email"]', email);
    await page.waitForTimeout(5000);
  await page.fill('input[name="password"]', password);
    await page.waitForTimeout(5000);
  await page.fill('input[name="conf_password"]', password);



  // Click register button
  await page.click('button[type="submit"]');

  // Wait to see the result
  await page.waitForTimeout(5000);

 // await browser.close();
})();
