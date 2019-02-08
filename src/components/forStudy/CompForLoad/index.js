import React, {Component} from 'react';
import LoadingHOC from '../LoadingHOC';

var Ddd = (props) => {
	return (
		<div> {props.data.title} </div>
	);
};

var DddVsHOC = LoadingHOC('data')(Ddd);

class CompForLoad extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		}
	}

//https://jsonplaceholder.typicode.com/todos/1
	componentDidMount() {
		fetch('/users') 
			.then(response => response.json())
			.then(data => this.onDownload(data));
	}

	onDownload(data) {
		window.setTimeout(() => {
			this.setState({data})
		}, 2000);
	}
	
	render() {
		return (
			<DddVsHOC data={this.state.data} />
		);
	}
}

export default CompForLoad;