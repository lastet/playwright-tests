import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from 'C:/playwright tests/playwright-dev-page.ts';

test.describe.only('PW Webs', () => {

    test('getting started should contain table of contents', async ({ page }) => {
        const playwrightDev = new PlaywrightDevPage(page);
        await playwrightDev.goto();
        await playwrightDev.getStarted();
        await expect(playwrightDev.tocList).toHaveText([
          'Installation',
          'First test',
          'Configuration file',
          'Writing assertions',
          'Using test fixtures',
          'Using test hooks',
          'Command line',
          'Configure NPM scripts',
          'Release notes'
        ]);
      });
      
      test('should show Page Object Model article', async ({ page }) => {
        const playwrightDev = new PlaywrightDevPage(page);
        await playwrightDev.goto();
        await playwrightDev.pageObjectModel();
        await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
      });


})