import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://whatsmyuseragent.org/");
  await page.screenshot({ path: `images/example.png` });
  await browser.close();
})();
