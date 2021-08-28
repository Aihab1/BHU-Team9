const stockData = require('../../../srv/stocks.json')

let hashedData = {};

stockData.forEach((stock) => {
    hashedData[stock.symbol] = [];
})

stockData.forEach((stock) => {
    hashedData[stock.symbol] = [...hashedData[stock.symbol], (stock)];
})

module.exports = {
    hashedData: hashedData
}