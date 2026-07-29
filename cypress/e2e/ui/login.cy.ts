import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

describe('SauceDemo Authentication Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.goto();
  });

  it('Scenario 1: Successful Login with valid credentials', () => {
    // TODO: Write test for successful login using standard_user / secret_sauce
  });

  it('Scenario 2: Invalid Login with locked out user', () => {
    // TODO: Write test for invalid login using locked_out_user / secret_sauce
  });
});
