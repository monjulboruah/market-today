const router = require("express").Router();
const request = require("request");
const cheerio = require("cheerio");

router.route("/gold-price-today-24-carat-22-carat").get((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  let elementArray1 = [];
  let elementArray2 = [];

  request(
    {
      method: "GET",
      url: "https://gadgets.ndtv.com/finance/gold-rate-in-india",
    },
    function (err, response, html, callback) {
      if (err) {
        return err;
      }
      $ = cheerio.load(html);
      elementArray1 = $(
        ".row.white_bg .container.padding_t25.clearfix ._crypwrp ._crprw._flx span"
      );

      elementArray2 = $("._cptbl._cptblm ._cptbltr ._flx div");

      const price = [];

      for (let i = 0; i < elementArray1.length; i++) {
        let text = $(elementArray1[i]).text();
        price.push(text);
        //console.log(text);
      }

      let weight = [];

      let cities = [];

      let price24Caratweight = [];
      let price22Caratweight = [];
      let price15Days24Carat = [];
      let price15Days22Carat = [];
      let price15DaysPercentChange = [];
      let price24CaratCities = [];
      let price22CaratCities = [];
      let days = [];

      for (let i = 0; i < 3; i++) {
        let text = $(elementArray2[i]).text();
        weight.push(text);
      }

      for (let i = 8; i < 23; i++) {
        let text = $(elementArray2[i]).text();
        days.push(text);
      }

      for (let i = 23; i < elementArray2.length; i++) {
        let text = $(elementArray2[i]).text();
        cities.push(text);
      }

      elementArray2 = $("._cptbl._cptblm ._cptbltr td._lft");

      for (let i = 0; i < 4; i++) {
        let text = $(elementArray2[i]).text();
        price24Caratweight.push(text);
      }

      for (let i = 4; i < 8; i++) {
        let text = $(elementArray2[i]).text();
        price22Caratweight.push(text);
      }

      for (let i = 8; i < 54; i++) {
        let text = $(elementArray2[i]).text();
        if (i % 3 == 2) {
          price15Days24Carat.push(text);
        } else if (i % 3 == 0) {
          price15Days22Carat.push(text);
        } else if (i % 3 == 1) {
          price15DaysPercentChange.push(text);
        }
      }

      for (let i = 54; i < elementArray2.length; i++) {
        let text = $(elementArray2[i]).text();
        if (i % 2 == 0) {
          price24CaratCities.push(text);
        } else if (i % 2 != 0) {
          price22CaratCities.push(text);
        }
      }

      let priceByWeight24Carat = [];
      let priceByWeight22Carat = [];
      let priceByDay = [];
      let priceByCities = [];

      for (let i = 0; i < weight.length; i++) {
        priceByWeight24Carat.push({
          weight: weight[i],
          price: price24Caratweight[i],
        });
      }

      for (let i = 0; i < weight.length; i++) {
        priceByWeight22Carat.push({
          weight: weight[i],
          price: price22Caratweight[i],
        });
      }

      for (let i = 0; i < days.length; i++) {
        priceByDay.push({
          days: days[i],
          price24Carat: price15Days24Carat[i],
          price22Carat: price15Days22Carat[i],
          percentChangePrice: price15DaysPercentChange[i],
        });
      }

      for (let i = 0; i < cities.length; i++) {
        priceByCities.push({
          cities: cities[i],
          price22Carat: price24CaratCities[i],
          price24Carat: price22CaratCities[i],
        });
      }

      const result = {
        priceByWeight24Carat: priceByWeight24Carat,
        priceByWeight22Carat: priceByWeight22Carat,
        priceByDay: priceByDay,
        priceByCities: priceByCities,
      };

      const data = {
        price: price,
        result: result,
      };
      res.json(data);
    }
  );
});

module.exports = router;
