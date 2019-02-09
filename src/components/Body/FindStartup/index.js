import React, { Component, Fragment } from 'react';
import './FindStartup.css';

import SearchJoinLine from '../SearchJoinLine';
import LineOFConditions from '../LineOFConditions';
import StartupCards from '../StartupCards';


class FindStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startups: [],
			str_search: ''
		}
	}

	componentDidMount() {
		fetch('/startups') 
			.then(response => response.json())
			.then(data => this.onDownload(data));
	}

	onDownload(data) {
		console.log(data);
		this.setState({
			startups: data
		});
	}

	render() {
		return (
			<Fragment>
				<SearchJoinLine />
				<LineOFConditions />
				<StartupCards startups={this.state.startups} />
			</Fragment>
		);
	}
}

export default FindStartup;