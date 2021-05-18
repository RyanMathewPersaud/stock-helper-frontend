import React from "react";

let searchVal = 'a';

const getInput = (event) => {
    searchVal = event.target.value;
}

const Search = (props) => {
    const { tickerSearches } = props;

    return (
        <div>
            <input type="text" placeholder="Enter Stock Ticker Here" onChange={getInput}/>
            <button onClick={() => console.log(searchVal)}>Add Stock</button>
        </div>
    )
    
};

export default Search;