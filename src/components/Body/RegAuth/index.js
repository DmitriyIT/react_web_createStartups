import React, { Component } from 'react';
import './RegAuth.scss';

import Auth from './Auth';
import Reg from './Reg';

class RegAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true
		}
	}

	goSwitch = () => { 
		this.setState((state, props) => ({show: !state.show }));
	}

	render() {
		return (
			<Auth switch={this.goSwitch} />
		);
	}
}

export default RegAuth;