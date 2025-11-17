import { test, expect } from '@playwright/test';

test.beforeAll(async ({ page}) => {
await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
});

test('products list has products with visible title', async ({ page }) => {
//titles
  await expect(page.getByRole('link', { name: 'Sacha the Deer' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Bumble the Elephant' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gerald the Giraffe' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Todd the Hedgehog' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Scar the Lion' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Gavin the Tiger' })).toBeVisible();
  await expect(page.getByRole('link').nth(5)).toBeVisible();
});

test('products list has products with visible color', async ({ page }) => {
//color
  await expect(page.locator('li:nth-child(2) > .styles > div > a').first()).toBeVisible();
  await expect(page.locator('li:nth-child(3) > .styles > .style > a')).toBeVisible();
  await expect(page.locator('li:nth-child(4) > .styles > div > a').first()).toBeVisible();
  await expect(page.locator('li:nth-child(5) > .styles > .style > a')).toBeVisible();
  await expect(page.locator('li:nth-child(6) > .styles > div > a').first()).toBeVisible();
});

test('products list has products with visible price', async ({ page }) => {
//price
  await expect(page.getByText('$').first()).toBeVisible();
  await expect(page.getByText('$').nth(1)).toBeVisible();
  await expect(page.getByText('$').nth(2)).toBeVisible();
  await expect(page.getByText('$').nth(3)).toBeVisible();
  await expect(page.getByText('$').nth(4)).toBeVisible();
  await expect(page.getByText('$').nth(5)).toBeVisible();
  await expect(page.locator('.styles').first()).toBeVisible();
});
test('products list has products with visible image', async ({ page }) => {
//image
  await expect(page.locator('li:nth-child(2) > .styles')).toBeVisible();
  await expect(page.locator('li:nth-child(3) > .styles')).toBeVisible();
  await expect(page.locator('li:nth-child(4) > .styles')).toBeVisible();
  await expect(page.locator('li:nth-child(5) > .styles')).toBeVisible();
  await expect(page.locator('li:nth-child(6) > .styles')).toBeVisible();
});