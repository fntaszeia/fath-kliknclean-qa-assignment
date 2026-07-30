# Quality Engineering & Test Strategy
## Senior QA Engineer Take-Home Assessment — KliknClean

---

## 1. Executive Summary

This repository contains the automated quality assurance framework for the KliknClean QA assignment. It leverages Cypress to provide a unified testing solution for both frontend UI flows (using Cucumber/BDD Gherkin syntax) and backend services (using pure JavaScript API assertions). The primary objective is to establish a robust, scalable, and maintainable testing architecture that covers critical user journeys on the Web UI (SauceDemo) and structural data validations on the API (FakeStoreAPI).

---

## 2. In-Scope vs. Out-of-Scope

### In-Scope

#### Web UI Automation (SauceDemo)
- **Login Flow:**
  - *Happy Path:* Successful login with valid credentials.
  - *Negative Cases:* Failed login attempts with an incorrect password, a locked-out user account, and missing credentials.
- **Cart Page Management:**
  - *Happy Path:* Adding items to the cart, verifying the dynamic cart badge counter, navigating into the cart page, and verifying the product is accurately listed.
  - *Negative Cases:* Removing items from the cart and ensuring the item disappears completely from the list and the badge counter resets.
- **Checkout Flow:**
  - *Happy Path:* Completing the full checkout sequence, validating total price calculations (Subtotal + Tax), verifying product details on the overview page, and finalizing the order.
  - *Negative Cases:* Attempting to proceed through the checkout pipeline with missing or incomplete mandatory customer information (e.g., missing postal code).

#### API Automation (FakeStoreAPI)
- **Products:** Schema validation for retrieving all products and single products.
- **Categories:** Schema validation for retrieving all product categories.
- **Auth:** Validating POST login token generation (positive case) and invalid credential rejections (negative case).
- **Carts:** Schema validation for retrieving user carts.
- **Users:** Schema validation for retrieving all registered users.

### Out-of-Scope
- **Penetration Testing (Pentest):** Manual or automated security and vulnerability assessments are excluded from this suite.
- **Load Testing:** Simulating high concurrent user traffic to measure response times is excluded.
- **Stress Testing:** Pushing the application beyond standard operating limits to observe system stability and recovery is excluded. 

---

## 3. Quality Risk Assessment Matrix

| Functional Area | Identified Quality Risk | Impact | Likelihood | Risk Level | Mitigation Strategy |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **Authentication** | Users cannot log in, or unauthorized users gain access to the system. | High | Low | **Medium** | E2E UI automation covering valid logins, locked-out users, and invalid credentials. API token generation validation. |
| **Cart Management** | Items disappear during navigation, or cart badge counter gets out of sync with actual items. | High | Medium | **High** | UI automation specifically verifying item persistence and cart badge counters when moving between pages. |
| **Checkout Flow** | Subtotal, tax, or final total is calculated incorrectly. | Critical | Low | **Medium** | Strict E2E assertions during checkout that validate final math calculations against the saved catalog prices. |
| **API Integration** | Backend API structure changes unexpectedly, breaking the frontend integration. | High | Medium | **High** | Automated API schema validation tests to immediately catch structural changes in responses. |

---

## 4. Test Pyramid Strategy

Our testing strategy diverges slightly from the traditional automation pyramid to prioritize immediate business value and critical user journeys. Automation implementation is prioritized in the following order:

1. **E2E Integration Core Business Happy Path First:** Ensure the most critical end-to-end user journeys (e.g., login, add to cart, checkout) work flawlessly under ideal conditions.
2. **Core Business Flow:** Expand UI automation to cover alternative paths and essential negative cases within the main user workflows.
3. **API Test Happy Path:** Validate that underlying backend services return correct status codes, schemas, and data payloads for standard requests.
4. **API Test Negative Cases:** Verify backend resilience by testing invalid inputs, unauthorized access, and incorrect parameters.
5. **Edge Cases (Core Business Integration & API):** Address boundary conditions, rare user interactions, and unusual API states to ensure complete robustness.
6. **Unit Tests:** Rely on developer-written unit tests at the codebase level to validate individual functions and component logic.

---

## 5. Test Environment & Execution Pipeline

<!-- TODO: Describe execution environments, multi-browser strategy, and CI pipeline --> 
