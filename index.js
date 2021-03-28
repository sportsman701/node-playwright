import {chromium} from "playwright";

(async ()=>{
    const browser = await chromium.launch({headless:false})
    const page = await browser.newPage();
    await page.goto('http://google.com/');
    await page.screenshot({ path: `example.png` });
    await page.fill('input[aria-label="Найти"]',"12345")
    await page.keyboard.press('Enter')
    await browser.close()
})()