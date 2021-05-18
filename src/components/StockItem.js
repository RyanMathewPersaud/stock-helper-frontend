import React, { Component } from 'react';
import { Stock } from './Stock';

class StockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  applyData(data) {
    this.setState({
      data: data
    })
  }

  componentDidMount() {
    // Query the API
    Stock.latestPrice(this.props.ticker, this.applyData.bind(this));
    
  }

  render() {
    return (
    <tr>
      <td>{this.props.ticker}</td>
      <td>{this.state.data.price}</td>
      <td>{this.state.data.date}</td>
      <td>{this.state.data.time}</td>
    </tr>
  );
  }
  
};

export default StockItem;
