import React, { Component, Fragment } from 'react';
import './SearchJoinLine.css';
import SearchField from './SearchField';
import SearchGamburger from './SearchGamburger';
import SearchButton from './SearchButton';

class SearchJoinLine extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search_str: ''
		}
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.findStartups(e.target.searchStr.value);
	}
	// onChangeSearchStr = (e) => {
	// 	this.setState({search_str: e.target.value});
	// }

	render() {
		return (
			<div className="SearchJoinLine">
				<SearchField 
					onSubmit={this.onSubmit}
					onChangeSearchStr={this.props.onChangeSearchStr} 
					search_str={this.props.search_str} />
				<SearchGamburger gumburgerClick={this.props.gumburgerClick} />
				<SearchButton />
			</div>
		);
	}
};

export default SearchJoinLine;