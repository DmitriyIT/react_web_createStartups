import React, {Component} from 'react';
import SearchLine from './SearchLine';
import List_startups from './List_startups';
import FormInput from './FormInput';

class MakeHi extends Component {
	constructor(props) {
		super(props);
		this.startups = [
			{titel: "first", text: 'awdawdawdawd da text', id: 1},
			{titel: "sec", text: 'awdawdawdawd da text', id: 2},
			{titel: "3", text: 'awdawdawdawd da text', id: 3}
		];
		
		this.funcFilter = this.funcFilter.bind(this);
		this.state = {
			filterStartups: this.startups
		}
	}

	funcFilter(text) {
		let str = text.toLowerCase();
		let arrFilter = this.startups.filter(function(item) {
			return item.titel.toLowerCase().indexOf(str) !== -1;
		});
		this.setState({
			filterStartups: arrFilter
		})
	}

	render() {
		return (
			<div>
				<FormInput name="" />
				<SearchLine funcFilter={this.funcFilter} />
				<List_startups arr={this.state.filterStartups} />
			</div>
		);
	};
}

export default MakeHi;