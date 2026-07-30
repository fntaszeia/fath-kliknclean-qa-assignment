# Exploratory Testing & Bug Report
## Senior QA Engineer Take-Home Assessment — KliknClean

Exploratory testing conducted on **SauceDemo** (`https://www.saucedemo.com`).

---

### Bug Report 1: [Session] - Session ended kicks user immediately to login when clicking back to home

- **Bug ID**: `BUG-001`
- **Severity**: Medium
- **Type**: UX / Session Management
- **Environment**: Desktop Chrome

#### Summary
When a user remains idle on the checkout success page until their session expires, clicking the "Back Home" button abruptly kicks them back to the login page. Instead of a clear session expiration notice, they receive a generic "Epic sadface: You can only access '/inventory.html' when you are logged in." error.

![Session Expired Error](screenshots/session_expired_bug.png)

#### Steps to Reproduce
1. Login with a standard account (`standard_user`).
2. Add a product to the cart.
3. Open the cart and proceed to checkout.
4. Fill out Checkout Step 1 and proceed.
5. Review the order on Step 2 (Overview) and click "Finish".
6. Wait on the Checkout Complete page for ~5 minutes until the session expires.
7. Click the "Back Home" button.

#### Expected Result
The system should gracefully inform the user that their session has expired (e.g., via a "Session Ended" popup or a dedicated session expiration page) before redirecting them to the login screen.

#### Actual Result
The user is immediately kicked to the login page and presented with a generic access error: "Epic sadface: You can only access '/inventory.html' when you are logged in."

#### Recommendation
Implement a proactive session validation check before routing. When a session expiry is detected, present the user with a clear, user-friendly message explaining that they have been logged out due to inactivity, rather than displaying an access violation error.

---

### Bug Report 2: [Data] - Product name contains testing artifact string

- **Bug ID**: `BUG-002`
- **Severity**: Low
- **Type**: Data Quality / UI
- **Environment**: Desktop Chrome

#### Summary
A product is displayed in the catalog with a name that looks like internal testing code: "Test.allTheThings() T-Shirt (Red)". This appears to be test data or a placeholder name that leaked into the production environment, reducing the professionalism of the store interface.

![Test Data Product Name](screenshots/test_product_name_bug.png)

#### Steps to Reproduce
1. Login with a valid account (e.g. `standard_user`).
2. View the products on the inventory page.
3. Scroll down and locate the red t-shirt product.

#### Expected Result
All products in the catalog should display proper, customer-facing names without code snippets or testing placeholders.

#### Actual Result
The product name is displayed as `Test.allTheThings() T-Shirt (Red)`.

#### Recommendation
Update the database entry for this product to use a proper commercial name (e.g., "Sauce Labs T-Shirt (Red)") and ensure a data validation or staging approval process is in place to prevent mock data from reaching the production storefront.

---

### Bug Report 3: [UI/Responsive] - Footer is not responsive on iPad Mini resolution

- **Bug ID**: `BUG-003`
- **Severity**: Medium
- **Type**: UI / Responsiveness
- **Environment**: iPad Mini (Resolution 768x1024) via Browser DevTools

#### Summary
When viewing the application on a tablet resolution—specifically the iPad Mini (768x1024)—the footer fails to respond dynamically to the screen size. This layout break specifically occurs when navigating to a **Product Detail** page (e.g., `inventory-item.html?id=4`). Instead of spanning the full width of the screen, the footer is constrained to the left side, leaving a massive empty white gap on the right.

*Further Testing Note:* The footer remains fully responsive at a width of 961px (e.g., 961x1029), but exactly at 960px width and below, it breaks and becomes completely unresponsive.

![Footer not responsive on iPad Mini](screenshots/ipad_mini_footer_bug.png)
![Footer responsive at 961px breakpoint](screenshots/footer_breakpoint_961px_bug.png)
![Footer responsive at 960px breakpoint](screenshots/footer_breakpoint_960px_bug.png)

#### Steps to Reproduce
1. Open the SauceDemo website in a web browser (e.g., Chrome).
2. Login with a valid account (e.g. `standard_user`).
3. Click on any product name or image to open the Product Detail page (e.g., `inventory-item.html?id=4`).
4. Open the browser's Developer Tools and toggle the Device Toolbar (Responsive View).
5. Change the view device to **iPad Mini** (or manually set the resolution to 768 x 1024).
6. Scroll down to the very bottom of the page.
7. Observe the layout and width of the dark footer block.

#### Expected Result
The footer container should be fully responsive and dynamically span 100% of the viewport width across all device resolutions, matching the layout structure of the rest of the application.

#### Actual Result
The footer is constrained to a fixed maximum width and does not adapt to the 768px screen width of the iPad Mini, leaving a large blank space on the right side.

#### Recommendation
Update the CSS styling for the footer container (e.g., `.footer`). Ensure it is set to `width: 100%;` and that any restrictive `max-width` properties are overridden or properly handled in the CSS media queries for tablet breakpoints (e.g., `@media (min-width: 768px)`).

---

### Bug Report 4: [Functional/Logic] - Missing payment method selection in checkout flow

- **Bug ID**: `BUG-004`
- **Severity**: Critical
- **Type**: Functional / Business Logic
- **Environment**: All Browsers / OS

#### Summary
During the checkout process, the user is never prompted to enter or select a payment method. After filling in their shipping/personal information (First Name, Last Name, Zip Code), the application proceeds directly to the "Checkout: Overview" page. On this page, a hardcoded mock payment method (`Payment Information: SauceCard #31337`) is displayed, and clicking "Finish" instantly processes the order to the success page. There is no actual payment integration, simulation step, or method selection flow.

#### Steps to Reproduce
1. Login to the application as a valid user (e.g., `standard_user`).
2. Add any product to the cart.
3. Click the Cart icon and select **Checkout**.
4. Enter First Name, Last Name, and Zip/Postal Code, then click **Continue**.
5. Observe the "Checkout: Overview" page. Note the hardcoded payment info.
6. Click **Finish**.

#### Expected Result
Before or during the Checkout Overview step, the application must provide a functional form to input payment details (Credit Card, PayPal, etc.) or select a saved payment method. The order should only proceed to the completion page if a payment method is selected and validated.

#### Actual Result
The checkout flow completely bypasses any real payment method entry. It uses hardcoded dummy payment data (`SauceCard #31337`) and immediately simulates a successful transaction without ever requesting the user's payment information.

#### Recommendation
Implement a payment step in the checkout flow. This should include form fields for payment integration (e.g., Stripe/PayPal) or at least a simulated payment selection UI if this is a demo environment. The checkout architecture must strictly prevent finalizing an order without capturing a valid payment method.
