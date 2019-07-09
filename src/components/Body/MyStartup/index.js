import React, { Component } from 'react';
import './MyStartup.scss';

import InfoCard from './InfoCard';
import StartupMain from './StartupMain';

class MyStartup extends Component {
	constructor(props) {
		super(props);

		this.fields1 = [
			"На этой странице будет отображаться стартап в котором вы состоите или который вы создали"
		];
		this.fields2 = [
			"Вы можете состоять только в 1м стартапе (создав свой стартап - не сможете войти в другой, пока существует ваш)"
		];
		this.state = {
			role: "no",//master||member||no
			userData: {
				name: props.name,
				surName: props.surName,
				photo: props.photo,
				description: props.description
			},
			startup: {
				title: 'name',
				description: 'd',
				messages:[],
				members:[],
				startup_requests:[] //if role == master
			}
		}
	}

	componentDidMount() {
		fetch('/mystartup')
			.then(response => response.json())
			.then(data => {
				// console.log(data);
				// console.log(this.props.match);
				if (data) {
					this.setState(data);
				} else {
					// this.setState({err: ''});
				}
			});
	}

	render() {
		var ShowComp = this.state.role == 'no' ? [
				<InfoCard color="grey" fields={this.fields1} />,
				<InfoCard color="yellow" fields={this.fields2} button='Перейти к созданию' />
			]
			: <StartupMain {...this.state} isAdmin={this.state.role == "master"} />;
		return (
			<div className="MyStartup">
				{ShowComp}
			</div>
		);
	}
}

export default MyStartup;
