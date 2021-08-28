const stockData = require("../../../srv/stocks.json");

let hashedData = {};

stockData.forEach((stock) => {
  hashedData[stock.symbol] = stock;
});
// console.log();
module.exports = {
  hashedData: hashedData,
};
