import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
  var React = require('react');


var IndexRoute = Router.IndexRoute;

var Main = require('../components/Main');
var Search = require('../components/Search');
var Saved = require('../components/Saved');

var routes = (

	<Route path="/" component={Main}>

		<Route path='search' component={Search} />
		{/* <Route path='/Saved' component={Saved} /> */}
		
		<IndexRoute component={Search} />

	</Route>

);
export default routes;