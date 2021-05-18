import "bootstrap/dist/css/bootstrap.min.css";

import StockItem from "./components/StockItem";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <table className="table mt-5">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Price</th>
              <th>Last Updated</th>
              <th>Time Updated</th>
            </tr>
          </thead>
          <tbody>
            <StockItem ticker="aapl" price="" lastUpdated="" timeUpdated="" />
            <StockItem ticker="tsla" price="" lastUpdated="" timeUpdated="" />
            <StockItem ticker="goog" price="" lastUpdated="" timeUpdated="" />
            <StockItem ticker="msft" price="" lastUpdated="" timeUpdated="" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
