import fs from 'fs/promises';
import path from 'path';
import { test } from '@playwright/test';

test('index page screenshot', async ({ page }) => {
  const rootDir = path.resolve(__dirname, '..');
  const outputDir = path.join(rootDir, 'playwright-screenshots');

  await fs.mkdir(outputDir, { recursive: true });
  await page.goto('/index.html', { waitUntil: 'load' });
  await page.screenshot({
    path: path.join(outputDir, 'index.png'),
    fullPage: true,
  });
});
