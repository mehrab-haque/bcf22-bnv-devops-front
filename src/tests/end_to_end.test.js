import puppeteer from "puppeteer";

// describe("App.js", () => {
//     let browser;
//     let page;

//     beforeAll(async () => {
//         browser = await puppeteer.launch();
//         page = await browser.newPage();
//     });

//     it("contains the welcome text", async () => {
//         await page.goto("http://localhost:3000/admin");
//         await page.waitForSelector(".end-to-end-auth-selector");
//         const text = await page.$eval(".end-to-end-auth-selector", (e) => e.textContent);
//         expect(text).toContain("Admin Login");
//     });

//     afterAll(() => browser.close());
// });
