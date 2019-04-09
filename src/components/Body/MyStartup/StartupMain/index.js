import React, { Component, Fragment } from 'react';
import './StartupMain.scss';

class StartupMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startups: [],
			str_search: '',
			show_LineOFConditions: false
		}
	}

	componentDidMount(data) {
		// console.log(this.props);
	}
	render() {
		return (
			<div> dddddd </div>
		);
	}
}

export default StartupMain;