import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

test('visability of name', async ({ page }) => {
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-1-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-2-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-3-title-link"]')).toBeVisible();
});

test('visability of image', async ({ page }) => {
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-1-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-5-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-2-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-3-img-link"]')).toBeVisible();
});

test('visability of description', async ({ page }) => {
  await expect(page.getByText('carry.allTheThings() with the')).toBeVisible();
  await expect(page.getByText('A red light isn\'t the desired')).toBeVisible();
  await expect(page.getByText('Get your testing superhero on')).toBeVisible();
  await expect(page.getByText('It\'s not every day that you')).toBeVisible();
  await expect(page.getByText('Rib snap infant onesie for')).toBeVisible();
  await expect(page.getByText('This classic Sauce Labs t-')).toBeVisible();
});

test('visability of price', async ({ page }) => {
  await expect(page.getByText('$29.99')).toBeVisible();
  await expect(page.getByText('$9.99')).toBeVisible();
  await expect(page.getByText('$49.99')).toBeVisible();
  await expect(page.getByText('$7.99')).toBeVisible();
});

test('visability of Add to cart button', async ({ page }) => {
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-sauce-labs-onesie"]')).toBeVisible();
  await expect(page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')).toBeVisible();
});

test('visability of current year in the footer', async ({ page }) => {
    await expect(page.locator('[data-test="footer-copy"]')).toHaveText(/2025/)
});
