const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

test('User Registration - Using Fake Username, Email, and Password', async ({ page }) => {

  const fakeUsername = faker.internet.username();          
  const fakeEmail = faker.internet.email();                
  const fakePassword = faker.internet.password(12);        

  console.log(` Username: ${fakeUsername}`);
  console.log(`Email: ${fakeEmail}`);
  console.log(`Password: ${fakePassword}`);


  await page.goto('https://labsqajobs.qaharbor.com/candidate-registration');

  await page.fill('input[name="username"]', fakeUsername);
  await page.fill('input[name="email"]', fakeEmail);
  await page.fill('input[name="password"]', fakePassword);
  await page.fill('input[name="conf-pass"]', fakePassword); // Same as password


  await page.click('button[type="submit"]');
  await page.goto('https://labsqajobs.qaharbor.com/login')

  // Fill login form with same credentials
  await page.fill('input[name="email"]', fakeEmail);
  await page.fill('input[name="password"]', fakePassword);

  // Submit login form
  await page.click('button[type="submit"]');

  // Wait for login result
 // await page.waitForTimeout(3000);

});       