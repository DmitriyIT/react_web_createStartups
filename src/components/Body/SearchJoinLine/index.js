import React, { Component, Fragment } from 'react';
import './SearchJoinLine.css';
import SearchField from './SearchField';
import SearchGamburger from './SearchGamburger';
import SearchButton from './SearchButton';

class SearchJoinLine extends Component {
	
	render() {
		return (
			<div className="SearchJoinLine">
				<SearchField />
				<SearchGamburger />
				<SearchButton />
			</div>
		);
	}
};

export default SearchJoinLine;