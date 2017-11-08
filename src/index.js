import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SymSearch from './components/SymSearch';
import data from './data.json';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SymSearch symdata={data}/>, document.getElementById('root'));
registerServiceWorker();
