// @ts-check
const { test, expect } = require('@playwright/test');
import { EmployePage } from '../pages/EmployePage';
import { LoginPage } from '../pages/LoginPage';

test('login successful and add new employee', async ({ page }) => {
  const login = new LoginPage(page);
  const employe = new EmployePage(page);
  await login.gotToLoginPage();
  await login.login("Admin","admin123");


  const tituloDashboard = await page.locator("//h6[normalize-space()='Dashboard']");
  const tituloTexto = await page.locator("//h6[normalize-space()='Dashboard']").textContent();
  await expect(tituloDashboard).toBeVisible
  await expect(tituloDashboard).toHaveText('Dashboard')
  console.log(tituloTexto)
  employe.enterPIMMoodule();
  

  await page.getByPlaceholder("First Name").fill("Lorenzo");
  await page.getByPlaceholder("Middle Name").fill("Lo");
  await page.getByPlaceholder("Last Name").fill("Vidaurre");
  await page.locator(".oxd-switch-input.oxd-switch-input--active.--label-right").click();
  await page.locator("div:nth-of-type(3) > .orangehrm-full-width-grid.oxd-grid-2 > div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input").fill("LorenzoVidaureMore2024@");
  await page.locator(".oxd-grid-item.oxd-grid-item--gutters.user-password-cell > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input").fill("LorenzoVidaurreMore2024@");
  await page.locator("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").fill("LorenzoVidaurreMore2024@");
  await page.locator("button[type='submit']").click();
  const btnPersonalDetail  = await page.locator("div:nth-of-type(1) > .orangehrm-tabs-item");
  await expect(btnPersonalDetail).toBeVisible
  
});




