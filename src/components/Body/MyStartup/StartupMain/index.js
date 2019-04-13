import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './StartupMain.scss';

import StartupMain_xml from './StartupMain_xml.js';
import Chat from './Chat';
import Members from './Members';
import Invites from './Invites';

class StartupMain extends Component {
	constructor(props) {
		super(props);
		// this.state = this.props;
	}

	componentDidMount(data) {
		console.log(this.props);
	}
	render() {
		return (
			<Fragment>
				<StartupMain_xml title={this.props.startup.title} description={this.props.startup.description} />
				<div className="MyStartupBottom">
					<Switch>
						<Route exact path="/mystartup/main" component={Chat} />
						<Route path="/mystartup/main/members" component={Members} />
						<Route path="/mystartup/main/invites" component={Invites} />
					</Switch>
				</div>
			</Fragment>
		);
	}
}

export default StartupMain;