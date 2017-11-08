import React from 'react';

import SymInput from './SymInput';
import SymData from './SymData';
import SubmitButton from './SubmitButton';
import FilterData from './FilterData';
import Clock from './Clock';

export default class SymSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSym: '',
      submit: false,
      date: new Date()
    };
    this.showData = this.showData.bind(this);
    this.removeData = this.removeData.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  showData() {
    this.setState({
      submit: true
    });
  }

  removeData(searchSym) {
    if (searchSym === '' || searchSym == null) {
      this.setState({
        submit: false
      });
    }
    this.setState({
      searchSym
    });
  }

  render() {
    const search = this.props.symdata.filter(data =>
      data.symbol.toLowerCase().includes(this.state.searchSym.toLowerCase())
    );

    return (
      <div className="SymSearch">
        <Clock date={this.state.date} />
        <p>Snapshot Quote</p>
        <div>
          <SymInput onChange={searchSym => this.removeData(searchSym)} />
          <SymData symdata={search} />
          <SubmitButton onClick={this.showData} />
          {this.state.submit && <FilterData symdata={search} />}
        </div>
      </div>
    );
  }
}
