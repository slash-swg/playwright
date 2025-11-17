import { test, expect } from '@playwright/test';

test('contact page contains header', async ({ page }) => {
await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
await expect(page.getByRole('heading', { name: 'Get in touch' })).toBeVisible(); 
});

test('contact page contains form title', async ({ page }) => {
await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
await expect(page.getByRole('heading', { name: 'Send us a message' })).toBeVisible(); 
});

test('contact page contains map', async ({ page }) => {
await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
await expect(page.locator('#map')).toBeVisible();  
});

test('submit contact form navigates to Success page', async ({ page }) => {

await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
await page.getByRole('textbox', { name: 'Full Name' }).click();
await page.getByRole('textbox', { name: 'Full Name' }).fill('John Doe');
await page.getByRole('textbox', { name: 'Email Address' }).click();
await page.getByRole('textbox', { name: 'Email Address' }).fill('drerrd@gmail.com');
await page.getByRole('textbox', { name: 'Message' }).click();
await page.getByRole('textbox', { name: 'Message' }).fill('Type something');
await page.getByRole('button', { name: 'Send Message' }).click();
await page.goto('https://ilarionhalushka.github.io/jekyll-ecommerce-demo/contact/');
await expect (page.url()).toContain("contact-success");
//https:ilarionhalushka.github.io/jekyll-ecommerce-demo/contact-success/
});