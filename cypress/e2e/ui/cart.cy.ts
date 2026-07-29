import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

describe('SauceDemo Shopping Cart Tests', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();

  beforeEach(() => {
    // TODO: Login before each test
  });

  it('Scenario 3: Add Product to Cart', () => {
    // TODO: Write test to add product to cart and verify cart badge
  });

  it('Scenario 4: Remove Product from Cart', () => {
    // TODO: Write test to remove product from cart and verify badge update
  });
});
