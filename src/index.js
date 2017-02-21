import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './styles/salesforce-lightning-design-system.min.css'
import './index.css';
import Home from './components/Home';
import NotFound from './components/NotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'));
