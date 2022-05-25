var NSEAPI = require("./service/API");
var merge = require("lodash/merge");

function getMarketStatus() {
  return NSEAPI.getMarketStatus();
}

function getIndices() {
  return NSEAPI.getIndices();
}

function getSectorsList() {
  return NSEAPI.getSectorsList();
}

function getQuoteInfo(symbol) {
  return NSEAPI.getQuoteInfo(symbol);
}

function getGainers() {
  return NSEAPI.getGainers();
}

function getLosers() {
  return NSEAPI.getLosers();
}

function getInclineDecline() {
  return NSEAPI.getInclineDecline();
}

function getIndexStocks(slug) {
  return NSEAPI.getIndexStocks(slug);
}

function searchStocks(symbol) {
  return NSEAPI.searchStocks(symbol);
}

function get52WeekHigh() {
  return NSEAPI.get52WeekHigh();
}

function get52WeekLow() {
  return NSEAPI.get52WeekLow();
}

function getTopValueStocks() {
  return NSEAPI.getTopValueStocks();
}

function getTopVolumeStocks() {
  return NSEAPI.getTopVolumeStocks();
}

var nse = {
  getMarketStatus: getMarketStatus,
  getIndices: getIndices,
  getSectorsList: getSectorsList,
  getQuoteInfo: getQuoteInfo,
  getGainers: getGainers,
  getLosers: getLosers,
  getInclineDecline: getInclineDecline,
  getIndexStocks: getIndexStocks,
  searchStocks: searchStocks,
  get52WeekHigh: get52WeekHigh,
  get52WeekLow: get52WeekLow,
  getTopValueStocks: getTopValueStocks,
  getTopVolumeStocks: getTopVolumeStocks,
};

module.exports = nse;
