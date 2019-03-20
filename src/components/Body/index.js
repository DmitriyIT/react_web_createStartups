import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Body.scss';
import MenuIcons from './MenuIcons';

import FindStartup from './FindStartup';
var DD2 = () => ( <div> d2 </div>);

var Body = (props) => {
	return (
		<BrowserRouter>
			<div className="Body">
				<div className="Container">
					<MenuIcons />
 					<Switch>
 						<Route exact path="/" component={FindStartup} />
 						<Route path="/d2" component={DD2} />
 					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default Body;