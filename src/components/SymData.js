import React from 'react';

export default function SymData(props) {
  //console.log(props)
  const stockData = props.symdata.map((data, index) => (
    <li key={index}>
      <strong>Symbol: {data.symbol} | </strong>
    </li>
  ));
  
  return (
    <ul className="data-list" aria-live="polite">
     {stockData}
    </ul>
  );
}