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

## Setup & Execution Instructions

### Prerequisites
- Node.js installed on your machine.

### Installation

```bash
npm install
```

### Running Tests

**1. Interactive Mode (Cypress Open) - Recommended for Development**
If you want to open the visual Cypress Test Runner to select and run specific specs (both UI and API) visually in the browser:
```bash
npm run test:open
# Or manually:
npx cypress open
```

**2. Run All UI Scenarios (Headless)**
The UI tests use Cucumber `.feature` files.
```bash
npm run test:ui
```

**3. Run All API Scenarios (Headless)**
The API tests are standard Cypress `.js` files (organized by endpoint in `cypress/e2e/api`). To run them all at once headlessly:
```bash
npm run test:api
```
Alternatively, they have been tagged with `@api`. When using `npx cypress open`, you can type `@api` in the **Specs Search Bar** to filter and run only the API scenarios!

**4. Run by Selected Tags (UI)**
Because the UI tests use Cucumber, you can filter them by Cucumber tags (e.g., `@all`, `@ui`, `@login`, `@cart`, `@checkout`):
```bash
npx cypress run --env tags="@checkout"
```

### Interactive Mode (Cypress UI)
If you prefer to run tests interactively with the browser UI instead of headless mode, use:
```bash
npx cypress open
```
This will open the Cypress Launchpad. From there:
1. Select **E2E Testing**.
2. Choose your preferred browser (e.g., Chrome) and click **Start E2E Testing**.
3. You can click any `.feature` or `.js` file to run it interactively.
4. **Tag Filtering**: In the "Specs" search bar, you can type tags like `@api` or `@ui` to instantly filter the test list!
