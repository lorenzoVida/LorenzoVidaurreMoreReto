// @ts-check
const { test, expect } = require('@playwright/test');
import { EmployePage } from '../pages/EmployePage';
import { LoginPage } from '../pages/LoginPage';

test('login successful and add new employee', async ({ page }) => {
  const login = new LoginPage(page);
  const employe = new EmployePage(page);
  await login.gotToLoginPage();
  await login.login("Admin","admin123");
  await employe.enterPIMMoodule();
  await employe.completeInformationNewEmploye();
  
});




