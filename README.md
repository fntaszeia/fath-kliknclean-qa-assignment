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
The API tests are standard Cypress `.js` files (organized by endpoint in `cypress/e2e/api`). They do not use Cucumber tags. To run them all at once:
```bash
npm run test:api
```

**4. Run by Selected Tags (UI Only)**
Because the UI tests use Cucumber, you can filter them by tags (e.g., `@all`, `@ui`, `@login`, `@cart`, `@checkout`):
```bash
npx cypress run --env tags="@checkout"
```
