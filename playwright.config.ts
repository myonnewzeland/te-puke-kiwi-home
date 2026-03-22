import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E Test Configuration
 *
 * Runs end-to-end tests against the local dev server (port 8080).
 * Before running tests start the dev server with: npm run dev
 *
 * Docs: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./e2e",

  // Run all tests in parallel
  fullyParallel: true,

  // Fail the build on CI if test.only is accidentally left in
  forbidOnly: !!process.env.CI,

  // Retry failing tests once on CI
  retries: process.env.CI ? 1 : 0,

  // Number of parallel workers
  workers: process.env.CI ? 1 : undefined,

  // HTML report written to playwright-report/
  reporter: [["html", { open: "never" }], ["list"]],

  use: {
    // Base URL so tests can use relative paths like page.goto('/')
    baseURL: "http://localhost:8080",

    // Collect a trace on first retry of a failing test
    trace: "on-first-retry",

    // Take screenshot on test failure
    screenshot: "only-on-failure",
  },

  projects: [
    {
      name: "Desktop Chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 13"] },
    },
  ],

  // Start the dev server automatically before tests
  webServer: {
    command: "npm run dev",
    url: "http://localhost:8080",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
