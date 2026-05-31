import { test, expect } from '@playwright/test';

test("renders QRGenerator page", async ({ page }) => {
  await page.goto("/qr-generator");

  await expect(
    page.getByRole("heading", { name: /qr\s?generator/i })
  ).toBeVisible();
});

test('renders QR code', async ({ page }) => {
  await page.goto('/qr-generator');

  await page.getByTestId('qr-url-input').fill('google.com');
  await page.getByRole('button', { name: 'GET' }).click();

  const qrImage = page.getByRole('img', { name: 'QR code' });
  const downloadButton = page.getByRole('button', { name: 'DOWNLOAD' });

  await expect(qrImage).toBeAttached();
  await expect(qrImage).toBeVisible();

  await expect(downloadButton).toBeVisible();

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'DOWNLOAD' }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe('qrcode.png');
});