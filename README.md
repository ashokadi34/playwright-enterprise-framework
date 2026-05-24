# Enterprise Playwright Automation Framework

## Overview

This project is an enterprise-grade Playwright automation framework developed using TypeScript following modern automation architecture and best practices.

The framework supports:
- UI Automation
- API Automation
- Cross-browser execution
- Parallel execution
- HTML reporting
- Screenshot/video capture
- Trace viewer
- CI/CD integration

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

---

# Framework Features

✅ Page Object Model (POM)

✅ Cross-browser execution

✅ Parallel execution

✅ Retry mechanism

✅ HTML reports

✅ Screenshot on failure

✅ Video recording on failure

✅ Trace viewer support

✅ API automation support

✅ Environment configuration

---

# Project Structure

```text
pages/
tests/
utils/
.github/workflows/
playwright.config.ts
```

---

# Installation

```bash
npm install
```

Install browsers:

```bash
npx playwright install
```

---

# Execute Tests

Run all tests:

```bash
npm test
```

Run headed mode:

```bash
npm run headed
```

Run Chrome only:

```bash
npm run chrome
```

Open report:

```bash
npm run report
```

---

# Reporting

Framework supports:
- HTML reports
- Screenshots
- Videos
- Trace files

---

# CI/CD

GitHub Actions workflow integrated for automated execution.

---

# Future Enhancements

- Docker integration
- Allure reporting
- Jenkins pipeline
- Database validation
- Visual testing
- BrowserStack integration