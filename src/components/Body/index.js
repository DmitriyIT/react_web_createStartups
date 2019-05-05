import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Body.scss';
import MenuIcons from './MenuIcons';

import FindStartup from './FindStartup';
import ShowStartup from './ShowStartup';
import RequestToStartup from './RequestToStartup';
import MyStartup from './MyStartup';
import Profile from './Profile';
import RegAuth from './RegAuth';
import CreateStartup from './CreateStartup';
import ChangeStartup from './ChangeStartup';

function MainComp() {
	return (
		<Fragment>
			<MenuIcons />
			<Switch>
				<Route exact path="/" component={FindStartup} />
				<Route path="/ShowStartup/:id" component={ShowStartup} />
				<Route path="/RequestToStartup/:id" component={RequestToStartup} />
				<Route path="/profile" component={Profile} />
				<Route path="/mystartup/main" component={MyStartup} />
				<Route path="/mystartup/create" component={CreateStartup} />
				<Route path="/mystartup/change" component={ChangeStartup} />
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