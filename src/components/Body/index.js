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
import ExitFromStartup from './ExitFromStartup';

function MainComp(props) {
	return (
		<Fragment>
			<MenuIcons />
			<Switch>
				<Route exact path="/"           component={FindStartup} />
				<Route path="/ShowStartup/:id"  render={(propsLocal) => <ShowStartup login={props.login} {...propsLocal} />} />
				<Route path="/RequestToStartup/:id" component={RequestToStartup} />
				<Route path="/profile"          render={(propsLocal) => <Profile login={props.login} updateUserInfo={props.updateUserInfo} {...propsLocal} />} />
				<Route path="/mystartup/main"   render={(propsLocal) => <MyStartup {...props} {...propsLocal} />} />
				<Route path="/mystartup/create" component={CreateStartup} />
				<Route path="/mystartup/change" component={ChangeStartup} />
				<Route path="/mystartup/exit/:admin" component={ExitFromStartup} />
			</Switch>
		</Fragment>
	);
}

var Body = (props) => {
	return (
		<div className="Body">
			<div className="Container">
				<Switch>
					<Route path="/RegAuth" render={(propsLocal) => <RegAuth login={props.login} {...propsLocal} />} />
					<Route path="/"        render={(propsLocal) => <MainComp {...props} {...propsLocal} />} />
				</Switch>
			</div>
		</div>
	);
}

export default Body;

