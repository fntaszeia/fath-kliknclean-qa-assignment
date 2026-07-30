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

**1. Run All UI Scenarios (Headless)**
```bash
npm run test:ui
```

**2. Run All API Scenarios (Headless)**
```bash
npm run test:api
```

**3. Run by Selected Tags (UI)**
We use tags for the UI features (e.g., `@all`, `@ui`, `@login`, `@cart`, `@checkout`). Run specific tags by using the `--env tags` argument:
```bash
npx cypress run --env tags="@checkout"
```

**4. Run Tests in Interactive Mode**
If you want to open the Cypress Test Runner UI to run specific specs visually:
```bash
npm run test:open
```
