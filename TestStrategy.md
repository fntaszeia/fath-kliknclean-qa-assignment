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
| | | | | | |

---

## 4. Test Pyramid Strategy

<!-- TODO: Describe your testing pyramid approach (Unit, Integration/API, E2E UI) -->

---

## 5. Test Environment & Execution Pipeline

<!-- TODO: Describe execution environments, multi-browser strategy, and CI pipeline --> 
