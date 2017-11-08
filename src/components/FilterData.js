import React from 'react';

import './FilterData.css';

export default function FilterData(props) {
  const stockData = props.symdata.map((data, index) => (
    <li key={index}>
        <span className="lastprice"> LastPrice: {data.price} | </span>
        <span className="open"> Open: {data.open} | </span>
        <span className="dayhigh"> DayHigh: {data.high} | </span>
        <span className="daylow"> DayLow: {data.low} | </span>
        <span className="volume"> Volume: {data.volume} | </span>
        <span className="marketcap"> Market Cap: {data.mktCap}</span>
    </li>
  ));
  
  return (
    <ul className="data-list" aria-live="polite">
     {stockData}
    </ul>
  );
}