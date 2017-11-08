import React from 'react';

export default function FilterInput(props) {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <label htmlFor="filter">Filter By</label>&emsp;
      <input
        type="filter"
        id="filter"
        name="filter"
        placeholder=""
        onChange={e => props.onChange(e.target.value)}
      />
    </form>
  );
}
