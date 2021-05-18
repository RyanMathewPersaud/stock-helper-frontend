import { iex } from "../config/iex.js";

export const Stock = {
    
    // Gets data from API and relays it back to the StockItem Component
    latestPrice: (ticker, applyData) => {
        fetch(Stock.getLatestPrice(ticker))
        .then((response) => response.json())
        .then((data) => {
            applyData(Stock.formatPriceData(data))
        });
    },

    // Helper function/value to keep latestPrice code clean and concise
    getLatestPrice: (ticker) => {
        return (`${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.key}`);
    },

    formatPriceData: (data) => {
        // This is to allow for flexbility should we use a different API
        const formattedData = {};
        const stockData = data[data.length - 1];
        formattedData.price = stockData.close;
        formattedData.ticker = stockData.ticker;
        formattedData.time = stockData.label;
        formattedData.date = stockData.date;
        return formattedData;
    }
}
