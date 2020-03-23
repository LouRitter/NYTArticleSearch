import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main';
import Search from './components/Search';

var routes = require('./config/routes');
ReactDOM.render(
  <div>
  <Main></Main>
  <Search></Search>
  </div>,
	document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
