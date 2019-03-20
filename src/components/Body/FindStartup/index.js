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
			str_search: '',
			show_LineOFConditions: false
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

	gumburgerClick = (e) => {
		this.setState((prevState, props) => (
			{ show_LineOFConditions: !prevState.show_LineOFConditions }
		));
	}

	render() {
		return (
			<Fragment>
				<SearchJoinLine gumburgerClick={this.gumburgerClick} />
				<LineOFConditions show={this.state.show_LineOFConditions} />
				<StartupCards startups={this.state.startups} />
			</Fragment>
		);
	}
}

export default FindStartup;