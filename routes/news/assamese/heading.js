const router = require("express").Router();
const axios = require("axios").default;
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

var subscriptionKey = "a2d7dda10dce47bf91c51a4c25900d54";
var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "global";

const middleware1 = (req, res, next) => {
  fs.readFile("news.json", "utf-8", function (err, data) {
    if (err) throw err;
    try {
      const content = JSON.parse(data);
      req.content = content.table;
      next();
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};

const middleware2 = async (text) => {
  let response = await axios({
    baseURL: endpoint,
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Ocp-Apim-Subscription-Region": location,
      "Content-type": "application/json",
      "X-ClientTraceId": uuidv4().toString(),
    },
    params: {
      "api-version": "3.0",
      from: "hi",
      to: ["as"],
    },
    data: [
      {
        text: text,
      },
    ],
    responseType: "json",
  }).catch((err) => {
    console.log(err);
  });
  return response.data;
};

router.get("/test", middleware1, (req, res) => {
  let data = req.content;
  let headingArray = [];

  for (let i = 0; i < data.length; i++) {
    let text = data[i].data;
    middleware2(text).then((response) => {
      let newData = response[0].translations[0].text;
      headingArray.push(newData);
      if (headingArray.length == data.length) {
        fs.writeFile(
          "news-assamese-heading.json",
          JSON.stringify(headingArray),
          function (err) {
            if (err) throw err;
          }
        );
        res.json(headingArray);
      }
    });
  }
});

module.exports = router;
