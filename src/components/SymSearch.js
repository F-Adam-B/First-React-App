import React from 'react';

import SymInput from './SymInput';
import SymData from './SymData';
import Filter from './Filter';
import FilterInput from './FilterInput';
import FilterData from './FilterData';
import Clock from './Clock';

export default class SymSearch extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      searchSym: '',
      filterTerm: '',
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // componentWillUnmount(){
  //   clearInterval(this.timerID);
  // }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const search = this.props.symdata.filter(data =>
      data.symbol.toLowerCase().includes(this.state.searchSym.toLowerCase())
    );

    // const filter = this.props.symdata.filter(data =>
    //   data.mktCap.toLowerCase().includes(this.state.filterTerm.toLowerCase())
    // );

    return (
      <div className="SymSearch">
        <Clock date={this.state.date} />
        <p>Type a Symbol</p>
        <div>
          <SymInput onChange={searchSym => this.setState({ searchSym })} />
          <SymData symdata={search} />
        
          {/* <FilterInput onChange={filterTerm => this.setState({ filterTerm })} />
          <Filter symdata={filter}/> */}
          {/* <FilterData symdata={filter}/> */}
        </div>
      </div>
    );
  }
}
