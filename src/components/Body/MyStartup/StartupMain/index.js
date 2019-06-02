import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './StartupMain.scss';

import StartupMain_xml from './StartupMain_xml.js';
import Chat from './Chat';
import Members from './Members';
import Invites from './Invites';

class StartupMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show_anim: false
		};
	}

	componentDidMount(data) {
		// console.log(this.props);
		this.setState({show_anim: true});
	}
	render() {
		return (
			<Fragment>
				<StartupMain_xml title={this.props.startup.title} description={this.props.startup.description} />
				<CSSTransition
					in={this.state.show_anim}
					timeout={700}
					classNames="MyStartupBottom" 
				>
					<div className="MyStartupBottom">
						<Switch>
							<Route exact path="/mystartup/main"   render={(props) => { 
								return <Chat {...props} userData={this.props.userData} /> 
							}} />
							<Route path="/mystartup/main/members" render={(propsLocal) => {
								return <Members isAdmin={this.props.isAdmin} {...propsLocal} />
							}} />
							<Route path="/mystartup/main/invites" component={Invites} />
						</Switch>
					</div>
				</CSSTransition>
			</Fragment>
		);
	}
}

export default StartupMain;