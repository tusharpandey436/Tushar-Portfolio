const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'C:\\Users\\GX\\.gemini\\antigravity\\brain\\6335d90e-3cda-442e-8206-a5ac63f33fc7\\screenshot.png', fullPage: true });
  await browser.close();
})();
