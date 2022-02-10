const express = require("express");
const cors = require("cors");
const API = require("./index");
const app = express();
const port = 5000;
const NSEAPI = API.NSE;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/api", require("./routes/gold/goldPrice"));

app.use("/api", require("./routes/news/eng/EngNews"));

app.use("/api", require("./routes/news/hindi/content"));

app.get("/get_market_status", (req, res, next) => {
  NSEAPI.getMarketStatus().then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_indices
app.get("/nse/get_indices", (req, res, next) => {
  NSEAPI.getIndices().then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_quote_info?companyName=TCS
app.get("/nse/get_quote_info", (req, res, next) => {
  NSEAPI.getQuoteInfo(req.query.companyName).then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_gainers
app.get("/nse/get_gainers", (req, res, next) => {
  NSEAPI.getGainers().then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_losers
app.get("/nse/get_losers", (req, res, next) => {
  NSEAPI.getLosers().then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_incline_decline
app.get("/nse/get_incline_decline", (req, res, next) => {
  NSEAPI.getInclineDecline().then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_index_stocks?symbol=nifty
app.get("/nse/get_index_stocks", (req, res, next) => {
  NSEAPI.getIndexStocks(req.query.symbol).then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/search_stocks?keyword=AXIS
app.get("/nse/search_stocks", (req, res, next) => {
  NSEAPI.searchStocks(req.query.keyword).then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_52_week_high
app.get("/nse/get_52_week_high", (req, res, next) => {
  NSEAPI.get52WeekHigh()
    .then(function (response) {
      res.json(response.data);
    })
    .catch((err) => res.send(err));
});

// Example: http://localhost:5000/nse/get_52_week_low
app.get("/nse/get_52_week_low", (req, res, next) => {
  NSEAPI.get52WeekLow().then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_top_value_stocks
app.get("/nse/get_top_value_stocks", (req, res, next) => {
  NSEAPI.getTopValueStocks().then(function (response) {
    res.json(response.data);
  });
});

// Example: http://localhost:5000/nse/get_top_volume_stocks
app.get("/nse/get_top_volume_stocks", (req, res, next) => {
  NSEAPI.getTopVolumeStocks().then(function (response) {
    res.json(response.data);
  });
});

app.listen(port, () => {
  console.log("Running");
});
