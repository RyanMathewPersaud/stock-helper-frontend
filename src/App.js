import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Search from "./components/Search";
import StockItem from "./components/StockItem";
// import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stockList: [
          'aapl',
          'tsla',
          'msft'
        ],

      stockObjects: {
        'aapl': <StockItem ticker='aapl' />,
        'tsla': <StockItem ticker='tsla' />,
        'msft': <StockItem ticker='msft' />
      }
    }
  }
  
  addStock = (e) => {
    const newStockList = this.state.stockList.concat([e.target.value]);
    this.setState(
      {
        stockList: newStockList
      }
    );
    console.log(newStockList);
  }


  render() {
    return (
      <div className="App">
        <div className="Container">
          <table className="table mt-5">
            <Search tickerSearches={this.addStock}/>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Last Updated</th>
                <th>Time Updated</th>
              </tr>
            </thead>
            <tbody>
              {this.state.stockList.map(stock => this.state.stockObjects[stock])}
            </tbody>
          </table>
        </div>
      </div>
    )
  };
}

export default App;
