/**
 * Playwright test fixture
 *
 * Re-export standard Playwright test and expect here.
 * Add custom fixtures or extend test behaviour below as needed.
 *
 * Example:
 *   export const test = base.extend<{ myFixture: MyType }>({
 *     myFixture: async ({}, use) => { await use(new MyType()); },
 *   });
 */
export { test, expect } from "@playwright/test";
