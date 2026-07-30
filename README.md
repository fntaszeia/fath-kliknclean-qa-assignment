# KliknClean — Senior QA Engineering Test Suite & Strategy

## Project Overview

<!-- TODO: Overview of the repository and assignment -->

---

## Repository Deliverables

- **[TestStrategy.md](TestStrategy.md)**: Part 1 — Test Strategy
- **UI Automation Suite (`tests/ui/`)**: Part 2 — UI Page Object Model tests
- **API Automation Suite (`tests/api/`)**: Part 3 — API test suite
- **[BugReport.md](BugReport.md)**: Part 4 — Bug Reports
- **[QAImprovementProposal.md](QAImprovementProposal.md)**: Part 5 — Leadership Proposal

---

## Quick Start: Run Locally

If you are a reviewer or cloning this repository for the first time, follow these simple steps to easily run the Cypress test suite locally:

### 1. Clone & Install
```bash
git clone https://github.com/fntaszeia/fath-kliknclean-qa-assignment.git
cd fath-kliknclean-qa-assignment
npm install
```

### 2. Easy Test Execution
We have set up simple NPM scripts so you don't need to memorize Cypress CLI commands.

**To open the visual Test Runner (Interactive Mode):**
*(Recommended for development and visual debugging)*
```bash
npm run test:open
```
*Tip: Once the Cypress window opens, select "E2E Testing", choose your browser (e.g. Chrome), and click on any `.feature` or `.js` file to watch it run!*

**To run tests quickly in the terminal (Headless Mode):**
- Run all UI (Web) Scenarios:
  ```bash
  npm run test:ui
  ```
- Run all API Scenarios:
  ```bash
  npm run test:api
  ```

### Advanced: Running by Tag
If you only want to run specific flows headlessly, you can filter the Cucumber UI tests by tags (e.g., `@login`, `@cart`, `@checkout`, `@api`).

To pass arguments to the `npm` script, simply add `--` before the Cypress arguments:

**Run a single tag:**
```bash
npm run test:ui -- --env tags="@checkout"
```

**Run multiple specific tags (using 'or'):**
```bash
npm run test:ui -- --env tags="@login or @cart"
```

**Run tests excluding a tag (using 'not'):**
```bash
npm run test:ui -- --env tags="not @checkout"
```
