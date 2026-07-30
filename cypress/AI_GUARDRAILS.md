# AI Coding Guardrails: Cypress Test Automation

This document serves as the absolute source of truth for any AI coding assistant (Copilot, Cursor, Gemini, etc.) generating or modifying automation code in this repository.

## 1. Core Architecture & Design Pattern
This project strictly follows a **BDD (Behavior-Driven Development)** approach integrated with the **Page Object Model (POM)**. 
- **NEVER** write raw `cy.get()` commands directly inside feature files.
- **NEVER** mix page object locators with step definitions.

## 2. Directory Structure Rules
When generating new tests, you must distribute the code exactly as follows:
- `cypress/e2e/**/*.feature`: Contains ONLY Gherkin syntax (Given, When, Then). Separated into `/ui` and `/api` subfolders.
- `cypress/steps/**/*.js`: Contains the Step Definitions mapping to the `.feature` files. This is where `cy.*` commands and assertions (`expect`, `should`) are executed.
- `cypress/pages/**/*.js`: Contains the Page Object classes. This is the **ONLY** place where element selectors (e.g., `[data-test="button"]`) should be defined.
- `cypress/schemas/**/*.js`: Contains JSON schemas used to validate API responses using AJV.
- `cypress/support/commands.js`: Contains custom global Cypress commands.

## 3. Writing UI Tests (POM Rules)
- **Selectors**: Define selectors as getters or properties within the Page Object class.
- **Actions**: Create methods for user actions (e.g., `clickLogin()`, `enterUsername()`).
- **No Assertions in POM**: Page Object methods should perform actions or return elements. Do **NOT** put `should('be.visible')` inside the POM action methods unless it's explicitly for waiting on an element state before an action. Real test assertions belong in the Step Definitions.
- **Chaining**: Where applicable, return `this` from action methods to allow chaining.

## 4. Writing API Tests
- Use `cy.request()` in the Step Definitions or as Custom Commands (`commands.js`).
- **Always** assert the HTTP Status Code first before asserting the body.
- When validating complex JSON responses, use the predefined JSON schemas located in `cypress/schemas/` with the `cy.validateSchema()` command or AJV directly.
- The `cy.request` has been globally overwritten in `commands.js` to automatically log payloads and responses. Do not create redundant logging.

## 5. Coding Standards & Hygiene
- **Language**: Modern ES6+ JavaScript.
- **Test Independence**: Every scenario must be able to run independently. Do not rely on state from previous scenarios. Use `beforeEach` or `Background` in Gherkin to set up the required state (e.g., logging in via API before a UI cart test).
- **Hardcoded Data**: Avoid hardcoding credentials or sensitive URLs. Rely on `Cypress.env()` or Cypress fixtures.
- **Tags**: Use `@ui` or `@api` tags in the `.feature` files so they can be run selectively in the CI/CD pipeline.
