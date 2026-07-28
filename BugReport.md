# 🐛 Exploratory Testing & Bug Report
## Senior QA Engineer Take-Home Assessment — KliknClean

Exploratory testing conducted on **SauceDemo** (`https://www.saucedemo.com`). Below are 3 documented defects/improvement opportunities.

---

### Bug Report 1: Checkout Form Allows Whitespace-Only Inputs (Data Validation Flaw)

- **Bug ID**: `BUG-001`
- **Severity**: **Medium**
- **Type**: Input Validation / UX Defect
- **Environment**: Desktop Chrome 120+, macOS Sonoma

#### Summary
The checkout information form (`/checkout-step-one.html`) accepts strings consisting purely of whitespace characters (e.g. `"   "`) for First Name, Last Name, and Zip/Postal Code, allowing orders to complete with invalid customer details.

#### Steps to Reproduce
1. Log into SauceDemo as `standard_user`.
2. Add any item to the cart and proceed to Checkout.
3. On the `Checkout: Your Information` page, enter spaces (`"   "`) into First Name, Last Name, and Zip/Postal Code fields.
4. Click **Continue**.

#### Expected Result
Form validation should trigger, highlighting fields in red with an error message: `"Error: First Name, Last Name, and Postal Code cannot be blank or whitespace."`

#### Actual Result
Form accepts whitespace and navigates to `checkout-step-two.html` (Order Overview), generating an order with blank customer details.

#### Recommendation
Implement `.trim()` validation on all text inputs before form submission.

---

### Bug Report 2: Product Sorting State Resets to Default Upon Navigating Back from Detail View

- **Bug ID**: `BUG-002`
- **Severity**: **Low**
- **Type**: UX / State Management Issue
- **Environment**: All Browsers (Chromium, Firefox, WebKit)

#### Summary
When a user changes the product catalog sorting option (e.g. from `Name (A to Z)` to `Price (high to low)`), clicks into a product detail view, and returns to the catalog using the browser **Back** button or **Back to products** button, the sort dropdown resets to `Name (A to Z)`.

#### Steps to Reproduce
1. Log into SauceDemo as `standard_user`.
2. Change sort dropdown to `Price (high to low)`.
3. Click on the first product item (Sauce Labs Fleece Jacket).
4. Click **Back to products** button.

#### Expected Result
Product catalog should retain the user's previously selected sort state (`Price (high to low)`).

#### Actual Result
Catalog resets back to default `Name (A to Z)`.

#### Recommendation
Store the selected sort preference in `sessionStorage` or URL query parameters (`?sort=hilo`).

---

### Bug Report 3: Missing Visual Indicator for Unavailable / Out of Stock Items

- **Bug ID**: `BUG-003`
- **Severity**: **Medium**
- **Type**: Inventory / UX Enhancement
- **Environment**: All Browsers

#### Summary
When logged in as a problem user or under simulated stock shortage, item cards continue to show enabled `Add to cart` buttons with no inventory status labels (e.g. "In Stock", "Out of Stock").

#### Steps to Reproduce
1. Log into SauceDemo as `problem_user`.
2. Attempt to view item stock status or add problem items to cart.

#### Expected Result
OutOfStock items should display a disabled `Out of Stock` badge and greyed-out button to prevent user frustration.

#### Actual Result
Button remains active, but adding to cart fails silently or adds incorrect items.

#### Recommendation
Expose product inventory availability in the UI component state and disable action buttons when `stockCount === 0`.
