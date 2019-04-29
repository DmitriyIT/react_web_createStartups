import React, { Component, Fragment } from 'react';
import './FindStartup.css';

import SearchJoinLine from './SearchJoinLine';
import LineOFConditions from './LineOFConditions';
import StartupCards from './StartupCards';
import MenuPagesBottom from './MenuPagesBottom';

class FindStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			startups: [],
			search_str: '',
			num_page: 1,
			show_LineOFConditions: false
		}
	}

	componentDidMount() {
		this.findStartups(this.state.search_str, this.state.num_page);
	}

	onChangeSearchStr = (e) => {
		this.setState({search_str: e.target.value});
	}

	gumburgerClick = (e) => {
		this.setState((prevState, props) => (
			{ show_LineOFConditions: !prevState.show_LineOFConditions }
		));
	}

	findStartups = (search_str = '', num_page = 1) => {
		console.log(search_str + '  dd ' + num_page);
		var count = 7;
		var data_sent = {
		    find_str: search_str,
		    start_from: 0 + count*(num_page - 1),//Если на одной стр. 9 стартапов, то для 1 страницы start_from=0, для 2 страницы start_from=9 и тд
		    count: count,
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

	moveFirstPage = (e) => {
		this.findStartups(this.state.search_str, 1);
		this.setState((prevState, props) => ({num_page: 1}));
	}
	moveBackPage = (e) => {
		this.setState((prevState, props) => {
			var num = --prevState.num_page;
			num = (num > 0 ) ? num : 1;
			this.findStartups(this.state.search_str, num);
			return {
				num_page: num
			}
		});	
	}
	moveNextPage = (e) => {
		this.setState((prevState, props) => {
			var num = ++prevState.num_page;
			this.findStartups(this.state.search_str, num);
			return {
				num_page: num 
			};
		});
	}

	render() {
		return (
			<Fragment>
				<SearchJoinLine 
					search_str={this.state.search_str}
					onChangeSearchStr={this.onChangeSearchStr}
					findStartups={this.findStartups} 
					gumburgerClick={this.gumburgerClick} />
				<LineOFConditions show={this.state.show_LineOFConditions} />
				<StartupCards startups={this.state.startups} />
				<MenuPagesBottom 
					moveNextPage={this.moveNextPage}
					moveBackPage={this.moveBackPage}
					moveFirstPage={this.moveFirstPage}
					numberOfPage={this.state.num_page} />
			</Fragment>
		);
	}
}

export default FindStartup;