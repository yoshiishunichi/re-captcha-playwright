import { chromium } from "playwright";
import { pageUrl } from "./data";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(pageUrl, {
    waitUntil: "networkidle",
  });
  const reCaptchaContainer = page.locator("#re-captcha-container");
  const coordinate = await reCaptchaContainer.boundingBox();
  if (coordinate) {
    const { x, y } = coordinate;

    await page.waitForTimeout(1000);
    await page.mouse.move(x, y);
    await page.waitForTimeout(1000);
    await page.mouse.click(x, y);
    await page.waitForTimeout(1000);
    await page.getByText("送信").click();
  }
  // await browser.close();
})();
