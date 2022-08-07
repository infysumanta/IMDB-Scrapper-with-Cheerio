const request = require("request-promise");
const cheerio = require("cheerio");

const URL = "https://www.imdb.com/title/tt1187043/";

(async () => {
  const response = await request(URL);

  let $ = cheerio.load(response);

  let title = $("h1[class='sc-b73cd867-0 eKrKux']").text();
  let rating = $(
    "div[class='sc-7ab21ed2-2 kYEdvH'] > span[class='sc-7ab21ed2-1 jGRxWM']"
  ).text();

  console.log(title, rating);
})();
