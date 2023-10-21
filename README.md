# puppeteer_sample_example
puppeteer_example_Run 

Install Node.js using website 

check npm install or not 
  Command=> npm

  command => npm i puppeteer --save (installed puppeteer node js library)

  Command => npm init
    gives name of that .js file 

Example 
// sucsessfuly Run
index.js

const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  
  // Navigate the page to a URL
  await page.goto('https://example.com');
  
  await page.screenshot({path: 'example.png'});
  
  await browser.close();
})();



  
  
