import React from 'react';

import SymInput from './SymInput';
import SymData from './SymData';

export default class SymSearch extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      searchSym: ''
    }
  }

  render() {
    const search = this.props.symdata.filter(
      data => data.symbol.toLowerCase()
      .includes(this.state.searchSym.toLowerCase()))

    return (
      <div className="SymSearch">
        <p>Type a Symbol</p>
        <div>
          <SymInput onChange={searchSym => this.setState({searchSym})}/>
          <SymData symdata={search}/>
        </div>
      </div>
    );
  }
}