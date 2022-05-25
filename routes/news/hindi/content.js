const router = require("express").Router();
const { Translate } = require("@google-cloud/translate").v2;
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");
require("dotenv").config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIAL);

const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id,
});

async function translationData(data) {
  let resp = await translate.translate(data, "hi");
  //console.log(resp[0]);
  return resp[0];
}

async function getData(content) {
  let i = 0;
  let newContent = [];
  for (i = 0; i < content.length; i++) {
    let data = await translationData(content[i]);
    newContent.push(data);
  }

  // content.forEach(async (element) => {
  //   await translate
  //     .translate(element, "hi")
  //     .then((resp) => {
  //       let index = content.indexOf(element);
  //       content[index] = resp[0];
  //       i++;
  //     })
  //     .catch((er) => console.log(er));

  //   if (i === content.length) {
  //     console.log(content);
  //     newContent = content;
  //     return newContent;
  //   } else {
  //     return "Not working";
  //   }
  // });
  return newContent;
}

router.route("/translate-content-hindi").get((req, res) => {
  let date_ob = new Date();
  let hours = date_ob.getHours();

  if (hours === 9) {
    request(
      {
        method: "GET",
        url: "https://timesofindia.indiatimes.com/briefs",
      },
      async function (err, response, html) {
        if (err) {
          return err;
        }
        $ = cheerio.load(html);

        let headingArray = $("#content .wrapper .briefs_outer .brief_box h2");
        let contentArray = $("#content .wrapper .briefs_outer .brief_box p");

        let content = [];
        let heading = [];

        try {
          for (let i = 0; i < contentArray.length; i++) {
            let text1 = $(contentArray[i]).text();
            let text2 = $(headingArray[i]).text();
            content.push(text1);
            heading.push(text2);
          }
        } catch (error) {
          console.log(error);
        }

        let data1 = await getData(heading);
        let data2 = await getData(content);

        const data = [];

        try {
          for (let i = 0; i < data1.length; i++) {
            let heading = data1[i];
            let content = data2[i];
            data.push({ heading, content });
          }
          fs.writeFile("hindiNews.json", JSON.stringify(data), function (err) {
            if (err) throw err;
          });
        } catch (error) {
          console.log(err);
        }
        console.log(data);
        res.json(data);
      }
    );
  } else {
    fs.readFile("hindiNews.json", function (err, data) {
      if (err) throw err;

      const content = JSON.parse(data);

      res.json(content);
    });
  }
});

module.exports = router;
