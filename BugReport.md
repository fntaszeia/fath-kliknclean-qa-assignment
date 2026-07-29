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

### Bug Report 2: [Title of Defect 2]

- **Bug ID**: `BUG-002`
- **Severity**: 
- **Type**: 
- **Environment**: 

#### Summary

#### Steps to Reproduce
1. 

#### Expected Result

#### Actual Result

#### Recommendation

---

### Bug Report 3: [Title of Defect 3]

- **Bug ID**: `BUG-003`
- **Severity**: 
- **Type**: 
- **Environment**: 

#### Summary

#### Steps to Reproduce
1. 

#### Expected Result

#### Actual Result

#### Recommendation

