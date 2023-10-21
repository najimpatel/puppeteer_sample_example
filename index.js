const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
    userDataDir: "./tmp"
  });
  const page = await browser.newPage();
  
  // Navigate the page to a URL
  // await page.goto('https://www.amazon.com/');
  await page.goto('https://www.amazon.com/b/?_encoding=UTF8&node=16225009011&content-id=amzn1.sym.5232c45b-5929-4ff0-8eae-5f67afd5c3dc&ref_=pd_gw_unk');
//   await page.goto("https://www.amazon.com/s?i=computers-intl-ship&bbn=16225007011&rh=n%3A16225007011%2Cn%3A11036071%2Cp_36%3A1253503011&dc&fs=true&qid=1635596580&rnid=16225007011&ref=sr_pg_1");
  
  const productHandles = await page.$$(
    "div.a-section.a-spacing-medium._octopus-search-result-card_style_apbSearchResultsContainer__bCqjb > ._octopus-search-result-card_style_apbSearchResultItem__2-mx4");  // . Class rahta # id rahenge
    // "div.s-main-slot.s-result-list.s-search-results.sg-row");  // . Class rahta # id rahenge
  
  for(const producthandle of productHandles){
    try {
      
    const title = await page.evaluate(
      (el) => el.querySelector("h2 > a > span").textContent, producthandle);

    const price = await page.evaluate(
        (el) => el.querySelector(".a-price > .a-offscreen").textContent, producthandle);

    const img = await page.evaluate(
        (el) => el.querySelector(".s-image").getAttribute("src"), producthandle);

    console.log(title);
    console.log(price);
    console.log(img);
  } catch (error) {

  }

  }
 
  
  // await browser.close();
})();

