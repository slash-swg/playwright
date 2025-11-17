import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/');
});

test('top navigation should navigate to Our Story', async ({ page }) => {
  await page.getByRole('navigation').getByRole('link', { name: 'Our Story' }).click();
  await expect(page.getByRole('heading', { name: 'Our story' })).toBeVisible();
});
test('top navigation should navigate to Contact', async ({ page }) => {
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
});
test('top navigation should navigate to Products', async ({ page }) => {
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click();
  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
});
test('top navigation should navigate to Products when clicking on Fur logo', async ({ page }) => {
  await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
  await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible();
  await page.getByRole('link', { name: 'Fur', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Find your spirit animal' })).toBeVisible();
});