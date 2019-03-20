import React, { Component } from 'react';
import './MyStartup.scss';

import InfoCard from './InfoCard';

class MyStartup extends Component {
	constructor(props) {
		super(props);
		
		this.fields1 = [
			"На этой странице будет отображаться стартап в котором вы состоите или который вы создали"
		];
		this.fields2 = [
			"Вы можете состоять только в 1м стартапе (создав свой стартап - не сможете войти в другой, пока существует ваш)"
		];
	}

	render() {
		return (
			<div className="MyStartup">
				<InfoCard title="Инф сообщ." color="grey" fields={this.fields1} button={false} funcButton='' />
				<InfoCard title="Инф сообщ." color="yellow" fields={this.fields2} button='Перейти к созданию' funcButton='' />
			</div>
		);
	}
}

export default MyStartup;