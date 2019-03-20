import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Body.scss';
import MenuIcons from './MenuIcons';

import FindStartup from './FindStartup';
import MyStartup from './MyStartup';

var Body = (props) => {
	return (
		<BrowserRouter>
			<div className="Body">
				<div className="Container">
					<MenuIcons />
 					<Switch>
 						<Route exact path="/" component={FindStartup} />
 						<Route path="/d2" component={MyStartup} />
 					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default Body;