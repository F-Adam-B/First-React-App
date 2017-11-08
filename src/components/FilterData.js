import React from 'react';

export default function FilterData(props) {
 console.log(props)
  const stockData = props.symdata.map((data, index) => (
    <li key={index}>
      <strong>Symbol: {data.symbol} | </strong>
        <span> LastPrice: {data.price} | </span>
        <span> Open: {data.open} | </span>
        <span> DayHigh: {data.high} | </span>
        <span> DayLow: {data.low} | </span>
        <span> Volume: {data.volume} | </span>
        <span> Market Cap: {data.mktCap}</span>
    </li>
  ));
  
  return (
    <ul className="data-list" aria-live="polite">
     {stockData}
    </ul>
  );
}