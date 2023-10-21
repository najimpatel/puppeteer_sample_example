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
  
  const productHandles = await page.$$(
    "div.a-section.a-spacing-medium._octopus-search-result-card_style_apbSearchResultsContainer__bCqjb > ._octopus-search-result-card_style_apbSearchResultItem__2-mx4");  // (dot. means=> Class )     ( # means =>  id )
  
  let i = 0;
  
  let items = [];


  for(const producthandle of productHandles){
    let title = "Null";
    let price = "Null";
    let img = "Null";

    try {
      
       title = await page.evaluate(
        (el) => el.querySelector("h2 > a > span").textContent, producthandle);

    } catch (error) { }

    try {
        price = await page.evaluate(
            (el) => el.querySelector(".a-price > .a-offscreen").textContent, producthandle);
        
    } catch (error) {}
    
    try {
        img = await page.evaluate(
            (el) => el.querySelector(".s-image").getAttribute("src"), producthandle);
        
    } catch (error) {}
    
    // console.log(title, price, img);

    // items.push(title,price,img)

    if (title !== "Null") {
        // items.push( title,price,img) };  // check  output 
        items.push({ title,price,img}) };  // {} bracket nahi de to ouput dict main nahi aayenga 
  
  }
 
//   console.log(items.length)  // Finding how much items 
  console.log(items)
  
  // await browser.close();
})();
