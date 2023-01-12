const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file://${path.join(__dirname, "index.html")}`);

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await fs.promises.writeFile("file.pdf", pdf);
  await browser.close();
})();
