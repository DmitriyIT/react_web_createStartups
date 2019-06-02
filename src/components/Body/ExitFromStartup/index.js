import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './ChangeStartup.scss';

import BigBlank from '../BigBlank';

class ChangeStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',
			button_text: 'Выйти из стартапа',
			fields: [
				{name: 'theme', text: "", value: 'Вы действиетльно хотите выйти из стартапа ?'}
			],
			redirectToMain: false
		};
	}

	componentDidMount() {
	}

	submitForm = (event) => {
		event.preventDefault();	
		fetch('/exitFromStartup')
			.then(() => {this.setState({redirectToMain: true})});
	}

	
	render() {
		if (this.state.redirectToMain) return <Redirect to='/mystartup/main' />;

		return (
			<BigBlank 
				err={this.state.err} 
				title="Покинуть стартап"
				fields_input={this.state.fields} 
				button_left={{
					link: "/mystartup/main",
					text: "отмена"
				}}
				button_text={this.state.button_text}
				submitForm={this.submitForm} 
				textareaChange={this.textareaChange} />
		);
	}
}

export default ChangeStartup;