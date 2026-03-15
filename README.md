# Playwright Saucedemo Automation

## Project Structure

- `tests/` - Test specs
- `pages/` - Page Object Model classes
- `data/` - Test data (e.g., users)
- `utils/` - Utility functions
- `fixtures/` - Test fixtures

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run tests:
   ```sh
   npm test
   ```
3. View HTML report:
   ```sh
   npm run test:report
   ```

## Linting & Formatting

- Lint code:
  ```sh
  npm run lint
  ```
- Format code:
  ```sh
  npm run format
  ```

## Adding Tests
- Use the Page Object Model (see `pages/`)
- Store test data in `data/`
- Keep tests small and focused

## Continuous Integration
- See `.github/workflows/playwright.yml`
