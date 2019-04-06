import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Body.scss';
import MenuIcons from './MenuIcons';

import FindStartup from './FindStartup';
import MyStartup from './MyStartup';
import RegAuth from './RegAuth';

function MainComp() {
	return (
		<Fragment>
			<MenuIcons />
			<Switch>
				<Route exact path="/" component={FindStartup} />
				<Route path="/profile" component={MyStartup} />
				<Route path="/mystartup" component={MyStartup} />
			</Switch>
		</Fragment>
	);
}

var Body = (props) => {
	return (
		<div className="Body">
			<div className="Container">
				<Switch>
					<Route path="/RegAuth" component={RegAuth} />
					<Route path="/" component={MainComp} />
				</Switch>
			</div>
		</div>
	);
}

export default Body;