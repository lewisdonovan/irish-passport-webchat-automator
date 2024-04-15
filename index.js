'use strict'

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const run = async () => {

  const puppeteerConfig = {
    headless: false,
    // args: puppeteer.defaultArgs(),
    // executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  }
  const browser = await puppeteer.launch(puppeteerConfig)
  const page = await browser.newPage()
  page.setViewport({ width: 1366, height: 768 })
  page.setUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36')
  page.setRequestInterception(true)
  page.on('request', request => {
    if (!request.isNavigationRequest()) {
      request.continue()
      return
    }
    const headers = request.headers()
    headers['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
    headers['Accept-Encoding'] = 'gzip'
    headers['Accept-Language'] = 'en-US,en;q=0.9,es;q=0.8'
    headers['Upgrade-Insecure-Requests'] = "1"
    headers['Referer'] = 'https://ireland.ie/'
    request.continue({ headers })
  });
  
  const url = "https://www.ireland.ie/en/dfa/passports/contact-us/";
  await page.goto(url, { waitUntil: 'networkidle2' });

  await page.waitForSelector('#chat-button');
  
  const content = await page.content();
  const $ = cheerio.load(content);

  const button = $("#chat-button");
  const text = $(button).find("img").attr("alt") || "";
  if (text && !text.includes("No live chat")) {
    console.log("CHAT AVAILABLE!");
    await page.evaluate(() => alert("CHAT AVAILABLE!"));
    return true;
  }

  // Reload
  await browser.close();

  return false;

}

(async () => {
  let hasChat = false;
  do {
    hasChat = await run();
  } while(!hasChat)
})();