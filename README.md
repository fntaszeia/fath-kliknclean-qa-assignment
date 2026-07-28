# 🧪 KliknClean — Senior QA Engineering Test Suite & Strategy

![Playwright](https://img.shields.io/badge/Playwright-1.40+-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=nodedotjs&logoColor=white)

## 📌 Project Overview

Automated test suite and Quality Engineering strategy for KliknClean Senior QA assessment. Built with Playwright + TypeScript, Page Object Model (POM), Zod API schema validation, and GitHub Actions CI/CD. Includes E2E UI tests, API test suite, TestStrategy.md, BugReport.md, and a 30-60-90 day QA Leadership proposal.

---

## 📁 Repository Deliverables

- 📄 **[TestStrategy.md](TestStrategy.md)**: Part 1 — Comprehensive QA Strategy, Risk Assessment Matrix, and Test Pyramid Architecture.
- 🌐 **UI Automation Suite (`tests/ui/`)**: Part 2 — Automated E2E Page Object Model suite covering Login, Cart, and Checkout on [SauceDemo](https://www.saucedemo.com).
- 🔌 **API Automation Suite (`tests/api/`)**: Part 3 — REST API test suite with Zod Schema Validation for [Fake Store API](https://fakestoreapi.com/docs).
- 🐛 **[BugReport.md](BugReport.md)**: Part 4 — Exploratory defect reports and UX enhancement opportunities.
- 🚀 **[QAImprovementProposal.md](QAImprovementProposal.md)**: Part 5 — 30-60-90 Day Leadership Roadmap and Quality KPIs.
- ⚙️ **[.github/workflows/playwright.yml](.github/workflows/playwright.yml)**: Continuous Integration GitHub Actions workflow.

---

## ⚙️ Quick Start & Local Setup

### 1. Prerequisites
- Node.js `v18.0.0` or higher
- npm `v9.0.0` or higher

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/fntaszeia/fath-kliknclean-qa-assignment.git
cd fath-kliknclean-qa-assignment
npm install
npx playwright install --with-deps
```

### 3. Running Tests

#### Run All Automated Tests (Headless)
```bash
npm test
```

#### Run UI Tests Only
```bash
npm run test:ui
```

#### Run API Tests Only
```bash
npm run test:api
```

#### Run Tests in Headed Mode (Visual Inspection)
```bash
npm run test:headed
```

#### Open HTML Test Report
```bash
npm run report
```

---

## 🏛️ Framework Architecture (Page Object Model)

```text
tests/
├── ui/
│   ├── login.spec.ts         # Scenarios 1 & 2: Successful & Invalid Login
│   ├── cart.spec.ts          # Scenarios 3 & 4: Add & Remove Product
│   └── checkout.spec.ts      # Scenarios 5 & 6: Checkout Flow & Regression Sorting
└── api/
    └── fakeStoreApi.spec.ts  # Endpoints: /users, /auth/login, /products, /carts
pages/
├── LoginPage.ts              # Locators & methods for SauceDemo Login
├── InventoryPage.ts          # Locators & methods for Product Catalog & Cart Badge
├── CartPage.ts               # Locators & methods for Shopping Cart
└── CheckoutPage.ts           # Locators & methods for Customer Info & Order Finish
utils/
└── apiSchemas.ts             # Zod Schema definitions for API contracts
```

---

## 🛠️ Tech Stack & Dependencies

- **Test Runner**: [Playwright](https://playwright.dev/)
- **Language**: TypeScript
- **Schema Validation**: [Zod](https://zod.dev/)
- **CI/CD**: GitHub Actions
- **Design Pattern**: Page Object Model (POM)
