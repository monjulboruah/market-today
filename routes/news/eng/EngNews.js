const router = require("express").Router();
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
require("dotenv").config();

router.route("/eng-news").get((req, res) => {
  // const translateText = async (text, targetLanguage) => {
  //   let data = await translate.translate(text, targetLanguage);
  //   // console.log(data);
  //   return data;
  // };

  request(
    {
      method: "GET",
      url: "https://timesofindia.indiatimes.com/briefs",
    },
    function (err, response, html) {
      if (err) {
        return err;
      }
      $ = cheerio.load(html);
      let headingArray = $("#content .wrapper .briefs_outer .brief_box h2");
      let contentArray = $("#content .wrapper .briefs_outer .brief_box p");

      let data = [];

      try {
        for (let i = 0; i < headingArray.length; i++) {
          let heading = $(headingArray[i]).text();
          let content = $(contentArray[i]).text();
          data.push({ heading, content });
        }
      } catch (error) {
        console.log(error);
      }

      res.json(data);
    }
  );
});

module.exports = router;
