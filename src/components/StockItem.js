import { get } from "lodash-es";
import React, { useState, useEffect } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import iex from "../config/iex";

const StockItem = (props) => {
  const [ticker, setTicker] = useState(props.ticker);
  const [price, setPrice] = useState(props.price);
  const [dateUpdated, setDateUpdated] = useState(props.dateUpdated);
  const [timeUpdated, setTimeUpdated] = useState(props.timeUpdated);

  const getPrice = () => {
    const url = `${iex.base_url}/stock/${ticker}/intraday-prices?chartLast=1&token=${iex.key}`;
    fetch(url)
      .then((response) => response.json())
      .then((stockData) => {
        return stockData[stockData.length - 1].close;
      });
  };

  useEffect(() => {
    setTicker(props.ticker.toUpperCase());
    setPrice(getPrice());
    setDateUpdated("02/02/02");
    setTimeUpdated("10:42PM");
    return () => {
      setPrice();
      setDateUpdated();
      setTimeUpdated();
    };
  });

  return (
    <tr>
      <td>{ticker}</td>
      <td>{price}</td>
      <td>{dateUpdated}</td>
      <td>{timeUpdated}</td>
    </tr>
  );
};

export default StockItem;
