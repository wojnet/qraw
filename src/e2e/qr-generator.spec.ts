import { test, expect } from '@playwright/test';

test("renders QRGenerator page", async ({ page }) => {
  await page.goto("/qr-generator");

  await expect(
    page.getByRole("heading", { name: /qr\s?generator/i })
  ).toBeVisible();
});