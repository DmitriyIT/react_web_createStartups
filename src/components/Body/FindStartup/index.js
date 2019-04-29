import React, { Component, Fragment } from 'react';
import './FindStartup.css';

import SearchJoinLine from './SearchJoinLine';
import LineOFConditions from './LineOFConditions';
import StartupCards from './StartupCards';

class FindStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startups: [],
			str_search: '',
			num_page: 1,
			show_LineOFConditions: false
		}
	}

	componentDidMount() {
		fetch('/startups')
			.then(response => response.json())
			.then(data => {
				this.setState({
					startups: data
				});
			});
	}

	gumburgerClick = (e) => {
		this.setState((prevState, props) => (
			{ show_LineOFConditions: !prevState.show_LineOFConditions }
		));
	}

	findStartups = (str_search) => {
		var data_sent = {
		    find_str: str_search,
		    start_from: 0,//Если на одной стр. 9 стартапов, то для 1 страницы start_from=0, для 2 страницы start_from=9 и тд
		    count: 7,
		    additional_params:{
		        data:'dd.mm.yyyy'
		    }
		};
		fetch("/findStartups", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify(data_sent)
		})
		.then((response) => response.json())
		.then((data) => {
			this.setState({ startups: data })
		});
	}


	render() {
		return (
			<Fragment>
				<SearchJoinLine 
					findStartups={this.findStartups} 
					gumburgerClick={this.gumburgerClick} />
				<LineOFConditions show={this.state.show_LineOFConditions} />
				{this.state.awd}
				<StartupCards startups={this.state.startups} />
			</Fragment>
		);
	}
}

export default FindStartup;