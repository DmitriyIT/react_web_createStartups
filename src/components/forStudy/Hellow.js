import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CompForRoad from './CompForRoad';

import MenuIcons from './MenuIcons';
import SearchLine    from './SearchLine';
import List_startups from './List_startups';
import FormInput     from './FormInput';
import CompForLoad   from './CompForLoad';
import CompPortal    from './CompPortal';
import ContextComp   from './ContextComp';


var StartComp = ({ funcFilter, filterStartups }) => (
	<div>
		<MenuIcons />
		<ContextComp />
		<CompForLoad />
		<FormInput name="" />
		<CompPortal>
			<div> Smth for portal ) </div>
		</CompPortal>

		<SearchLine funcFilter={funcFilter} />
		<List_startups arr={filterStartups} />
	</div>
);

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
				<ContextComp />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" render={() => <StartComp funcFilter={this.funcFilter} filterStartups={this.state.filterStartups} />} />
						<Route path="/dd/:number1-:number2" component={CompForRoad} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	};
}

export default MakeHi;